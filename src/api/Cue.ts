import { MouseConstraint, Events, Vector, Body } from 'matter-js';

const greenLine = '#90EE90';
const redLine = '#EA7979';

class Cue {

  body: any;
  strength: number;
  limit: number;

  static create(engine, options)
  {
    const contraintOptions = {
      mouse: options.mouse,
      constraint: {
        render: { strokeStyle: greenLine, type: 'line' },
        stiffness: 0
      }
    };

    const mouseConstraint = MouseConstraint.create(engine, contraintOptions);
    const constraint = mouseConstraint.constraint;

    this.body = null;
    this.strength = options.strength || 0.05;
    this.limit = options.limit || 200;

    const draggingHandler = () => {

      let offset = Vector.sub(this.body.position, constraint.pointA);
      constraint.render.strokeStyle = Vector.magnitude(offset) > this.limit ? redLine : greenLine;

    };

    const beginDragHandler = () => {

      this.body = mouseConstraint.body;
      constraint.pointB = { x: 0, y: 0 };
      constraint.render.strokeStyle = greenLine;

      Events.on(mouseConstraint, 'mousemove', draggingHandler);
      
    };
    
    const endDragHandler = () => {
      
      let velocity = Vector.sub(this.body.position, constraint.pointA);
      let length = Vector.magnitude(velocity);

      if (length > this.limit)
      {
        velocity = Vector.mult(Vector.normalise(velocity), this.limit);
      }

      Body.setVelocity(this.body, Vector.mult(velocity, this.strength));
      
      Events.off(mouseConstraint, 'mousemove', draggingHandler);

    };

    Events.on(mouseConstraint, 'startdrag', beginDragHandler);
    Events.on(mouseConstraint, 'enddrag', endDragHandler);

    return mouseConstraint;

  }

}

export default Cue;