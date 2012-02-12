//Makes sure everything is pulled in so we can run tests against the output file.
//DO NOT include this file in the library JAR.
goog.require('Cl');
goog.require('Cl.CL');
goog.require('Cl.Constraint');
goog.require('Cl.EditConstraint');
goog.require('Cl.EditOrStayConstraint');
goog.require('Cl.StayConstraint');
goog.require('Cl.EditInfo');
goog.require('Cl.errors');
goog.require('Cl.errors.ConstraintNotFound');
goog.require('Cl.errors.Error');
goog.require('Cl.errors.NonlinearExpression');
goog.require('Cl.errors.NotEnoughStays');
goog.require('Cl.errors.RequiredFailure');
goog.require('Cl.errors.TooDifficult');
goog.require('Cl.LinearConstraint');
goog.require('Cl.LinearEquation');
goog.require('Cl.LinearInequality');
goog.require('Cl.LinearExpression');
goog.require('Cl.Point');
goog.require('Cl.SimplexSolver');
goog.require('Cl.Strength');
goog.require('Cl.SymbolicWeight');
goog.require('Cl.Tableau');
goog.require('Cl.AbstractVariable');
goog.require('Cl.DummyVariable');
goog.require('Cl.ObjectiveVariable');
goog.require('Cl.SlackVariable');
goog.require('Cl.Variable');
