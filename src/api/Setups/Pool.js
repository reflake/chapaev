import { Runner, Composites, Common, Composite, Matter, Engine, Render, World, Bodies, Mouse, MouseConstraint, Body, Events } from 'matter-js';
import Cue from '../Cue.ts';

function createPoolSetup(container) {

  // create engine
  var engine = Engine.create(),
	  world = engine.world;

  world.gravity.y = 0;

  // create renderer
  var render = Render.create({
	element: container,
	engine: engine,
	options: {
		width: 1200,
		height: 900,
		wireframes: false,
	}
  });

  Render.run(render);

  // create runner
  let runner = Runner.create();
  Runner.run(runner, engine);

  // add wall bodies
  World.add(world, [
		Bodies.rectangle(600, 900, 1200, 50.5, { isStatic: true })
  ]);

	// add pyramid
  let createChecker = (x, y, radius) =>
	Bodies.circle(x, y, radius, {
	  restitution: 0.6,
	  friction: 800,
	  render: {
		  sprite: { xScale: radius / 100.0, yScale: radius / 100.0, texture: 'media/checker.png' }
	  }
	});

  let createRow = (xx, yy, cells, radius) => Composites.stack(xx, yy, cells, 1, 0, 0, (x, y) => createChecker(x, y, radius));
  let createPyramid = (xx, yy, radius, height) => {

		const contactPoint = 1 / Math.sqrt(2) + 0.2;
		const transform = (f) => (columns, radius) =>
			f(
			xx - columns * radius,
			yy + (columns - height * 0.5) * contactPoint * radius * 2, 
			columns,
			radius
			);
		const transformedCreateRow = transform(createRow);

		const reducer = (array, columns) => [...array, transformedCreateRow(columns, radius)];

		return [...Array(height + 1).keys()].reduce(reducer, []);
		
  };

  var stack = createPyramid(600, 500, 20, 5);
  
  World.add(world, [...stack]);

  World.add(world, createChecker(600, 300, 20));

  // add mouse control
  var mouse = Mouse.create(render.canvas),
	  	cue = Cue.create(engine, { mouse });

  World.add(world, cue.mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, {
	  min: { x: 0, y: 0 },
	  max: { x: 1200, y: 900 }
  });

  // wrapping using matter-wrap plugin
  var allBodies = Composite.allBodies(world);

  for (var i = 0; i < allBodies.length; i += 1) {
	  allBodies[i].plugin.wrap = {
		  min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
		  max: { x: render.bounds.max.x + 100, y: render.bounds.max.y }
	  };
  }

  // context for MatterTools.Demo
  return {
	  engine: engine,
	  runner: runner,
	  render: render,
	  canvas: render.canvas,
	  stop: function() {
		  Matter.Render.stop(render);
		  Matter.Runner.stop(runner);
	  }
  };
}

export default createPoolSetup;