export function BreakConstraint(mouseConstraint) {
  mouseConstraint.body = null;
  mouseConstraint.constraint.pointA = null;
  mouseConstraint.constraint.pointB = null;
  mouseConstraint.constraint.bodyB = null;
}