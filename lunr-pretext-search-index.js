var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "MA224BookFront-3",
  "level": "1",
  "url": "MA224BookFront-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This book and all related activities emanate from the following works:   The Ordinary Differential Equations Project by Thomas Judson  Elementary Differential Equations by William Trench   "
},
{
  "id": "sec-basic-terminology",
  "level": "1",
  "url": "sec-basic-terminology.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic Terminology and Concepts",
  "body": " Basic Terminology and Concepts    To understand that a differential equation is an equation relating a function (say, ) to one or more of its derivatives and that an initial value problem is a differential equation where the initial condition , , is specified.  To understand that the order of a differential equation is the order of the highest derivative in the equation.  To be able to identify the major parts of a differential equation: the dependent variables , the independent variables , and the parameters .  To be able to verify a solution for a differential equation; that is, determine whether a proposed solution to an equation works or not without actually solving the differential equation .  To understand that the general solution of a differential equation is an equation that contains all possible solutions of the differential equation, and that the particular solution is a solution that satisfies a specific initial condition.  To understand that a family of solutions is a set of solutions to a differential equation that are parameterized by one or more arbitrary constants.   To understand that a linear differential equation is a differential equation in which the dependent variable and its derivatives appear to the first power and are not multiplied together, and that a nonlinear differential equation is a differential equation that is not linear.      We study differential equations because they are the natural language for describing many phenomena in the physical world. They arise from real-world situations where rates of change are involved. (In other words, we will be spending time with applied mathematics .)  In first- and second-semester calculus, we learned how to compute derivatives and integrals. While we sometimes worked with applications (e.g. related rates, optimization), more often we learned techniques for differentiating and integrating functions in isolation. This is equivalent to the part of the movie The Karate Kid where Mr. Miyagi teaches Daniel the fundamentals of karate by having Daniel paint a fence or apply wax to his car.  This course is the All-Valley Tournament part of the movie. We will be applying the techniques we learned in calculus to solve problems in physics, engineering, and other sciences. Yes, there will be plenty of instances where we will be learning techniques. But we will also spend time applying these techniques. Eventually, we will get to the point where we see a problem and our minds will automatically go \"Paint the fence!\" or \"Wax on! Wax off!\" We will be learning how to model real-world phenomena with differential equations, and then how to solve those equations to make predictions about the phenomena.    What is a Differential Equation?  A differential equation is an equation that relates a function to one or more of its derivatives. For example, the equation   is a differential equation that relates the function to its derivative . The equation   is a differential equation that relates the function to its derivative . The equation   is a differential equation that relates the function to its first and second derivatives.  Our goal, given a differential equation, is to find a function that satisfies the equation. If possible, we would like to find all such functions. One of the lessons we will learn in the course is that this is not always possible. We will then learn how to find approximate solutions.  Here are some examples of differential equations and the contexts in which they arise:   Biology  In biology, we might model population growth with a differential equation like , where is the population at time and is the constant of proportionality .  This is a fairly simple model of population growth, and it is called the exponential growth model . It assumes that the population grows at a rate that is proportional to the current population. This model does OK over short periods of time, but it is not very realistic over longer periods of time, since it does not take into account factors such as limited resources, competition, and predation. However, it is a good starting point for understanding population growth.  Other models are more complex.    Physics  It is known in physics that all forces acting on a particular moving body at time depend only on the position , velocity , and acceleration of the body at time .  Newton's second law of motion states that the net force acting on a body is equal to the mass of the body multiplied by its acceleration. This can be expressed as a differential equation:   where is the net force acting on the body at time , is the mass of the body, and is the acceleration of the body at time . This means that we will generally have a differential equation to describe the forces on an object of the form:   where is some function that describes the forces acting on the body. An example of such an equation is the spring-mass equation , which has the form:   Here, is the mass of the object, is the damping coefficient , is the spring constant , and is an external force applied to the system.   We note that differential equations contain derivatives in either Leibniz notation (e.g. ) or prime notation (e.g. ). We will use both notations throughout the course, and we will be comfortable with both. When we use prime notation, we will often write for the first derivative and for the second derivative, without explicitly stating the variable of differentiation.  Here are some more examples of differential equations:   is a more sophisticated version of the population growth model we saw earlier. This is a logistic growth model with harvesting . In this case, is the intrinsic growth rate, is the carrying capacity (the maximum population size that the environment can sustain), and is the harvesting rate.  is an example of the previously discussed spring-mass equation . We will see plenty of these later in the course.  is an example of a RLC circuit equation with alternating current. is the current, is the resistance, is the inductance, and is the capacitance.  is an example of the heat equation , which models the distribution of heat (or variation in temperature) in a given region over time. Here, is the temperature at position and time , and is the thermal diffusivity. This is an example of a partial differential equation . These types of equations are studied in more advanced courses.     Parts of a Differential Equation  There are several parts to a differential equation:   The dependent variable , which is the function we are trying to find (e.g., ).  The independent variable , which is the variable with respect to which we are taking derivatives (e.g., ).  Parameters , which are constants or functions that appear in the equation but are not derivatives. We will treat them as constants when we are solving the equation. (In particular, parameters will show up in the solution.)  The order of the differential equation, which is the highest derivative that appears in the equation.   Here are several examples of how these parts appear in different types of differential equations:   Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  There are no parameters in this equation.  The order of the equation is 1, since the highest derivative is the first derivative.     Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameter is .  The order of the equation is 1, since the highest derivative is the first derivative.     Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameters are , , and .  The order of the equation is 1, since the highest derivative is the first derivative.     Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameters are , , and .  The order of the equation is 2, since the highest derivative is the second derivative.     Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameter is .  The order of the equation is 2, since the highest derivative is the second derivative.     Consider Van de Pol's equation . In this equation:   The dependent variable is .  The independent variable is .  The parameter is .  The order of the equation is 2, since the highest derivative is the second derivative.     A note about dependent and independent variables: In many applications, the dependent variable is a function of time. In these cases, we will often use as the independent variable. However, there are also many applications where the dependent variable is a function of space or some other quantity. In these cases, we will use a different independent variable (e.g., , , or ). The techniques we learn in this course will apply regardless of the choice of independent variable.    Solutions of Differential Equations   A solution of a differential equation is a function that satisfies the equation. For example, the function is a solution of the differential equation , where is an arbitrary constant. The function is a solution of the differential equation , where is an arbitrary constant. The function is a solution of the differential equation , where is an arbitrary constant.  In general, a solution of a differential equation will contain one or more arbitrary constants. The number of arbitrary constants in the solution is equal to the order of the equation. For example, the general solution of a first-order differential equation will contain one arbitrary constant, while the general solution of a second-order differential equation will contain two arbitrary constants.  In our earlier calculus experience, we often found a single solution to a problem. In this course, we will often be interested in finding the general solution of a differential equation, which contains all possible solutions. We will also be interested in finding particular solutions that satisfy specific initial conditions or boundary conditions . An initial condition is a value of the solution function at a specific point, while a boundary condition is a value of the solution function at more than one point.  An initial value problem is a differential equation together with an initial condition. Recall that in our earlier calculus experience, when we would integrate a function, we would include a constant of integration. If we also had an initial condition, we could determine the value of this constant.  Similarly, when we solve a differential equation, we often find a general solution that contains arbitrary constants. The initial condition allows us to determine the specific values of these constants, leading to a particular solution. A solution to an initial-value problem must satisfy both the differential equation and the initial condition. In particular, the solution function must be defined on an interval containing the initial point.  There are also boundary value problems , where we are given conditions at more than one point. We will not be studying these types of problems in this course, but they are important in many applications.    Finding Solutions  Our goal in this course is to find solutions to differential equations. We will learn various techniques for finding solutions, including both analytical and numerical methods. Analytical methods involve finding an exact solution in terms of known functions, while numerical methods involve approximating the solution using computational algorithms. As we will see, we cannot always find exact solutions analytically. For example, the differential equation does not have an elementary function as its solution because we cannot integrate . In such cases, we will rely on numerical or graphical methods to approximate the solution.    Verifying Solutions  While we will be spending most of this course trying to find ways to solve differential equations, it turns out that verifying that a given function is a solution of a differential equation is often much easier than finding the solution in the first place.  For example, let's verify that the function is a solution of the differential equation . To do this, we substitute and its derivatives into the equation and check if the equality holds.     Substituting these into the left-hand side of the equation gives us:     This works for every possible value of , so we have verified that is indeed a solution of the differential equation.  However, is not the only solution of the equation. For example, the function is also a solution since if we substitute it into the equation for , we get:     Therefore, is a solution of the differential equation.  In fact, the general solution of the equation is , where and are arbitrary constants.    Determine whether is a solution to the differential equation . If it is, find the largest set of -values for which is a valid solution.    We note that the proposed solution is defined on and differentiable on . If we set , then the chain rule gives us   Thus is a solution of the differential equation for . (There are other solutions that are valid outside this interval.)       In-Class Worksheet: Basic Terminology   For each of the following differential equations, identify the dependent variable, independent variable, parameters, and order of the equation.         Dependent variable:  Independent variable:  Parameters: none  Order: 1         Dependent variable:  Independent variable:  Parameters:  Order: 1         Dependent variable:  Independent variable:  Parameters:  Order: 1         Dependent variable:  Independent variable:  Parameters:  Order: 2         Dependent variable:  Independent variable:  Parameters:  Order: 3         Dependent variable:  Independent variable:  Parameters:  Order: 2         Dependent variable:  Independent variable:  Parameters: none  Order: 2         Dependent variable:  Independent variable:  Parameters:  Order: 2       Linear Differential Equations  A linear differential equation is a differential equation in which the dependent variable and its derivatives appear to the first power and are not multiplied together. The dependent variable and its derivatives can be multiplied by functions of the independent variable, but they cannot be multiplied by each other or raised to any power other than one. Lastly, the dependent variable and its derivatives cannot appear inside a function such as a sine or cosine.   The equation is a linear differential equation.    is a linear differential equation. (Here, we assume that is a function of .)    The equation is not a linear differential equation because the dependent variable appears to the second power.    The equation is not a linear differential equation because the dependent variable appears inside the sine function.     Families of Solutions  In general, a solution of a differential equation will contain one or more arbitrary constants. The number of arbitrary constants in the solution is equal to the order of the equation. For example, the general solution of a first-order differential equation will contain one arbitrary constant, while the general solution of a second-order differential equation will contain two arbitrary constants. The general solution of a first-order equation will be a family of curves parameterized by the arbitrary constant. We call this a one-parameter family of solutions . A second-order equation will be a family of curves parameterized by two arbitrary constants, called a two-parameter family of solutions .   The differential equation has the general solution , which is a one-parameter family of solutions. Each value of gives a different solution curve.   Curves of the one-parameter family of solutions      The differential equation has the general solution , which is a one-parameter family of solutions. Each value of gives a different solution curve.   Curves of the one-parameter family of solutions      The differential equation has the general solution , which is a two-parameter family of solutions. Each pair of values gives a different solution curve.   Note that in the above examples, the solution curves do not intersect. This is a general property of solutions to linear first-order differential equations. Additionally, the collection of all solution curves in the plane will fill up the plane. That is, every point in the plane will belong to a unique solution curve.  Non-linear differential equations can have solution curves that intersect. For example, the differential equation has the general solution , which is a one-parameter family of solutions. The solution curves for this equation intersect with the solution curve . (This is problematic because, for instance, the initial condition could correspond to multiple solution curves.)   Curves of the one-parameter family of solutions    Linear differential equations have the property that their solution curves do not intersect, while non-linear differential equations can have solution curves that intersect. This distinction is important when analyzing the behavior of solutions to different types of differential equations. In particular, it is important to note that the uniqueness of solutions to initial value problems is guaranteed for linear differential equations, while non-linear equations may have multiple solutions for the same initial condition.    A first-order differential equation with an initial condition is called a first-order initial value problem or IVP . The solution of the IVP is a function that satisfies both the differential equation and the initial condition, and is called a particular solution of the IVP.     Consider the first-order IVP:   The general solution of the differential equation is . To find the particular solution that satisfies the initial condition, we substitute and into the general solution:   Thus, the particular solution of the IVP is .    Consider the first-order IVP:   The general solution of the differential equation is . To find the particular solution that satisfies the initial condition, we substitute and into the general solution:   Thus, the particular solution of the IVP is .   We talked above about the fact that solutions for linear first-order initial value problems are unique. This is a very important property of linear first-order differential equations.   Existence and Uniqueness of Solutions of Linear IVP's   Given an IVP of a linear first-order differential equation, a unique solution exists on an interval containing the initial point, provided that the coefficient functions of the dependent variable and its derivative are continuous on that interval.    The proof of this theorem is beyond the scope of this course, but it is a fundamental result in the theory of differential equations. The theorem guarantees that, under the given conditions, there is a unique solution to the initial value problem in some interval around the initial point. This is important because it ensures that the behavior of the solution is well-defined and predictable, which is crucial for applications in science and engineering.     Consider the first-order IVP:   The coefficient functions of the dependent variable and its derivative are continuous on the entire real line. Therefore, by the Existence and Uniqueness Theorem, there exists a unique solution to this IVP.  The unique solution is in fact , which can be verified by substituting it into the differential equation and checking that it satisfies the initial condition. The solution is valid on the entire real line.   The unique solution to the linear IVP , .        Verifying Solutions   In problems (a)-(d), use differentiation to show that the given function is a solution of the equation for all values of the constants.     Equation: , Function:       Equation: , Function:       Equation: , Function:       Equation: , Function:       Initial Value Problems   In problems (a)-(f), solve the initial value problem and find the particular solution that satisfies the given initial condition. (That is, find the value(s) of the arbitrary constant(s) in the family of solutions so that the initial condition is satisfied.) In each case, first show that the family of solutions satisfies the equation for all values of the constants. Also state the exact interval in which the particular solution of the initial-value problem exists.      , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        Introduction to MATLAB  Technology can prove very useful when studying differential equations. Software packages such Maple, Mathematica, and SageMath each have their advantages and disadvantages. We will use MATLAB, used extensively by engineers, as our choice of software. Norwich has a MATLAB license available. You can access MATLAB through the university's computing resources, and even use an online version so you don't have to download anything.  For our purposes, MATLAB cells are embedded into the textbook, We are actually embedding a cell that uses Octave, which is a free and open-source alternative to MATLAB. The syntax is the same, so you can use either one. so there is nothing to install on your computer. Simply, evaluate the cell. You can even change the preloaded commands in the cell if you wish. For example, let us evaluate the derivative of   Note that anything following a percentage sign % is a comment. The output of the cell shows that the derivative of is .  You can use MATLAB to take derivatives of more complicated functions, and it can also be used to solve differential equations, initial value problems, and plot solutions. For instance, we can use MATLAB to solve the differential equation with the initial condition . The solution is .   We can use MATLAB to plot functions. For example, we can plot the function as well as its derivative on the same graph. (To accomplish this, we will use the linspace command to create a range of values, and then evaluate the function and its derivative at those values. We will then use the plot command to create the graph.) Because of the limitations of the embedded cell, you will need to copy and paste the code into a MATLAB session to see the graph.  % Define the symbolic variable syms x % Define the function f = x^2 * cos(x); % Calculate the derivative df = diff(f, x); % Create a range of x values for plotting x_vals = linspace(-10, 10, 100); % Evaluate the function and its derivative at the x values f_vals = double(subs(f, x, x_vals)); df_vals = double(subs(df, x, x_vals)); % Plot the function and its derivative figure; plot(x_vals, f_vals, 'b', 'LineWidth', 2); % Function in blue hold on; plot(x_vals, df_vals, 'r', 'LineWidth', 2); % Derivative in red hold off; % Add labels and legend xlabel('x'); ylabel('Function values'); title('Function and its Derivative'); legend('f(x) = x^2 cos(x)', 'f''(x) = 2x cos(x) - x^2 sin(x)');  You should see a graph with the function in blue and its derivative in red.   As we progress through the course, we will introduce more MATLAB commands and techniques that will help you analyze and visualize differential equations effectively.  Note that the MATLAB commands used in this section are also compatible with Octave, which is a free and open-source alternative to MATLAB. You can use either software to perform the calculations and visualizations described here.  You will find plenty of resources online to learn more about MATLAB and Octave, including tutorials, documentation, and forums where you can ask questions and share knowledge with other users. A good place to start is the official MATLAB documentation at https:\/\/www.mathworks.com\/help\/matlab\/ or the Octave documentation at https:\/\/octave.org\/doc\/interpreter\/ .   MATLAB Exercises   MATLAB Practice   In problems (a)-(c), use MATLAB or Octave to perform the following tasks:     Define the function and compute its derivative. Plot both the function and its derivative on the same graph for .      Solve the differential equation using MATLAB's symbolic solver. Display the general solution.      Use MATLAB to plot the solution of the initial value problem over the interval .       "
},
{
  "id": "sec-basic-terminology-2",
  "level": "2",
  "url": "sec-basic-terminology.html#sec-basic-terminology-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  To understand that a differential equation is an equation relating a function (say, ) to one or more of its derivatives and that an initial value problem is a differential equation where the initial condition , , is specified.  To understand that the order of a differential equation is the order of the highest derivative in the equation.  To be able to identify the major parts of a differential equation: the dependent variables , the independent variables , and the parameters .  To be able to verify a solution for a differential equation; that is, determine whether a proposed solution to an equation works or not without actually solving the differential equation .  To understand that the general solution of a differential equation is an equation that contains all possible solutions of the differential equation, and that the particular solution is a solution that satisfies a specific initial condition.  To understand that a family of solutions is a set of solutions to a differential equation that are parameterized by one or more arbitrary constants.   To understand that a linear differential equation is a differential equation in which the dependent variable and its derivatives appear to the first power and are not multiplied together, and that a nonlinear differential equation is a differential equation that is not linear.    "
},
{
  "id": "sec-basic-terminology-3-1",
  "level": "2",
  "url": "sec-basic-terminology.html#sec-basic-terminology-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equations applied mathematics "
},
{
  "id": "subsec-what-is-a-differential-equation-2",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-what-is-a-differential-equation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation "
},
{
  "id": "subsec-what-is-a-differential-equation-11",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-what-is-a-differential-equation-11",
  "type": "Example",
  "number": "1.1.1",
  "title": "Biology.",
  "body": " Biology  In biology, we might model population growth with a differential equation like , where is the population at time and is the constant of proportionality .  This is a fairly simple model of population growth, and it is called the exponential growth model . It assumes that the population grows at a rate that is proportional to the current population. This model does OK over short periods of time, but it is not very realistic over longer periods of time, since it does not take into account factors such as limited resources, competition, and predation. However, it is a good starting point for understanding population growth.  Other models are more complex.  "
},
{
  "id": "subsec-what-is-a-differential-equation-12",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-what-is-a-differential-equation-12",
  "type": "Example",
  "number": "1.1.2",
  "title": "Physics.",
  "body": " Physics  It is known in physics that all forces acting on a particular moving body at time depend only on the position , velocity , and acceleration of the body at time .  Newton's second law of motion states that the net force acting on a body is equal to the mass of the body multiplied by its acceleration. This can be expressed as a differential equation:   where is the net force acting on the body at time , is the mass of the body, and is the acceleration of the body at time . This means that we will generally have a differential equation to describe the forces on an object of the form:   where is some function that describes the forces acting on the body. An example of such an equation is the spring-mass equation , which has the form:   Here, is the mass of the object, is the damping coefficient , is the spring constant , and is an external force applied to the system.  "
},
{
  "id": "subsec-what-is-a-differential-equation-15",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-what-is-a-differential-equation-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic growth model with harvesting carrying capacity spring-mass equation RLC circuit equation heat equation partial differential equation "
},
{
  "id": "subsec-parts-of-a-differential-equation-3",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-parts-of-a-differential-equation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable independent variable Parameters order "
},
{
  "id": "subsec-parts-of-a-differential-equation-5",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-parts-of-a-differential-equation-5",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  There are no parameters in this equation.  The order of the equation is 1, since the highest derivative is the first derivative.   "
},
{
  "id": "subsec-parts-of-a-differential-equation-6",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-parts-of-a-differential-equation-6",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameter is .  The order of the equation is 1, since the highest derivative is the first derivative.   "
},
{
  "id": "subsec-parts-of-a-differential-equation-7",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-parts-of-a-differential-equation-7",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameters are , , and .  The order of the equation is 1, since the highest derivative is the first derivative.   "
},
{
  "id": "subsec-parts-of-a-differential-equation-8",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-parts-of-a-differential-equation-8",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": " Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameters are , , and .  The order of the equation is 2, since the highest derivative is the second derivative.   "
},
{
  "id": "subsec-parts-of-a-differential-equation-9",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-parts-of-a-differential-equation-9",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": " Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameter is .  The order of the equation is 2, since the highest derivative is the second derivative.   "
},
{
  "id": "subsec-parts-of-a-differential-equation-10",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-parts-of-a-differential-equation-10",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": " Consider Van de Pol's equation . In this equation:   The dependent variable is .  The independent variable is .  The parameter is .  The order of the equation is 2, since the highest derivative is the second derivative.   "
},
{
  "id": "subsec-solutions-of-differential-equations-2-1",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-solutions-of-differential-equations-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "subsec-solutions-of-differential-equations-2-3",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-solutions-of-differential-equations-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial conditions boundary conditions "
},
{
  "id": "subsec-solutions-of-differential-equations-2-4",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-solutions-of-differential-equations-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial value problem "
},
{
  "id": "subsec-solutions-of-differential-equations-2-6",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-solutions-of-differential-equations-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boundary value problems "
},
{
  "id": "subsubsec-Finding-Solutions-2",
  "level": "2",
  "url": "sec-basic-terminology.html#subsubsec-Finding-Solutions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Analytical methods numerical methods "
},
{
  "id": "subsubsec-Verifying-Solutions-12",
  "level": "2",
  "url": "sec-basic-terminology.html#subsubsec-Verifying-Solutions-12",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Determine whether is a solution to the differential equation . If it is, find the largest set of -values for which is a valid solution.    We note that the proposed solution is defined on and differentiable on . If we set , then the chain rule gives us   Thus is a solution of the differential equation for . (There are other solutions that are valid outside this interval.)   "
},
{
  "id": "ws-basic-terminology-3-1",
  "level": "2",
  "url": "sec-basic-terminology.html#ws-basic-terminology-3-1",
  "type": "Worksheet Exercise",
  "number": "1.1.4.1",
  "title": "",
  "body": "     Dependent variable:  Independent variable:  Parameters: none  Order: 1   "
},
{
  "id": "ws-basic-terminology-3-2",
  "level": "2",
  "url": "sec-basic-terminology.html#ws-basic-terminology-3-2",
  "type": "Worksheet Exercise",
  "number": "1.1.4.2",
  "title": "",
  "body": "     Dependent variable:  Independent variable:  Parameters:  Order: 1   "
},
{
  "id": "ws-basic-terminology-3-3",
  "level": "2",
  "url": "sec-basic-terminology.html#ws-basic-terminology-3-3",
  "type": "Worksheet Exercise",
  "number": "1.1.4.3",
  "title": "",
  "body": "     Dependent variable:  Independent variable:  Parameters:  Order: 1   "
},
{
  "id": "ws-basic-terminology-3-4",
  "level": "2",
  "url": "sec-basic-terminology.html#ws-basic-terminology-3-4",
  "type": "Worksheet Exercise",
  "number": "1.1.4.4",
  "title": "",
  "body": "     Dependent variable:  Independent variable:  Parameters:  Order: 2   "
},
{
  "id": "ws-basic-terminology-3-5",
  "level": "2",
  "url": "sec-basic-terminology.html#ws-basic-terminology-3-5",
  "type": "Worksheet Exercise",
  "number": "1.1.4.5",
  "title": "",
  "body": "     Dependent variable:  Independent variable:  Parameters:  Order: 3   "
},
{
  "id": "ws-basic-terminology-3-6",
  "level": "2",
  "url": "sec-basic-terminology.html#ws-basic-terminology-3-6",
  "type": "Worksheet Exercise",
  "number": "1.1.4.6",
  "title": "",
  "body": "     Dependent variable:  Independent variable:  Parameters:  Order: 2   "
},
{
  "id": "ws-basic-terminology-3-7",
  "level": "2",
  "url": "sec-basic-terminology.html#ws-basic-terminology-3-7",
  "type": "Worksheet Exercise",
  "number": "1.1.4.7",
  "title": "",
  "body": "     Dependent variable:  Independent variable:  Parameters: none  Order: 2   "
},
{
  "id": "ws-basic-terminology-3-8",
  "level": "2",
  "url": "sec-basic-terminology.html#ws-basic-terminology-3-8",
  "type": "Worksheet Exercise",
  "number": "1.1.4.8",
  "title": "",
  "body": "     Dependent variable:  Independent variable:  Parameters:  Order: 2   "
},
{
  "id": "subsec-linear-ode-2",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-linear-ode-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear differential equation "
},
{
  "id": "subsec-linear-ode-3",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-linear-ode-3",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": " The equation is a linear differential equation.  "
},
{
  "id": "subsec-linear-ode-4",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-linear-ode-4",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": " is a linear differential equation. (Here, we assume that is a function of .)  "
},
{
  "id": "subsec-linear-ode-5",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-linear-ode-5",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": " The equation is not a linear differential equation because the dependent variable appears to the second power.  "
},
{
  "id": "subsec-linear-ode-6",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-linear-ode-6",
  "type": "Example",
  "number": "1.1.13",
  "title": "",
  "body": " The equation is not a linear differential equation because the dependent variable appears inside the sine function.  "
},
{
  "id": "subsec-families-of-solutions-2",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-families-of-solutions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-parameter family of solutions two-parameter family of solutions "
},
{
  "id": "subsec-families-of-solutions-3",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-families-of-solutions-3",
  "type": "Example",
  "number": "1.1.14",
  "title": "",
  "body": " The differential equation has the general solution , which is a one-parameter family of solutions. Each value of gives a different solution curve.   Curves of the one-parameter family of solutions    "
},
{
  "id": "subsec-families-of-solutions-4",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-families-of-solutions-4",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": " The differential equation has the general solution , which is a one-parameter family of solutions. Each value of gives a different solution curve.   Curves of the one-parameter family of solutions    "
},
{
  "id": "subsec-families-of-solutions-5",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-families-of-solutions-5",
  "type": "Example",
  "number": "1.1.18",
  "title": "",
  "body": " The differential equation has the general solution , which is a two-parameter family of solutions. Each pair of values gives a different solution curve.  "
},
{
  "id": "ode-3",
  "level": "2",
  "url": "sec-basic-terminology.html#ode-3",
  "type": "Figure",
  "number": "1.1.19",
  "title": "",
  "body": " Curves of the one-parameter family of solutions   "
},
{
  "id": "def-first-order-ivp",
  "level": "2",
  "url": "sec-basic-terminology.html#def-first-order-ivp",
  "type": "Definition",
  "number": "1.1.20",
  "title": "",
  "body": "  A first-order differential equation with an initial condition is called a first-order initial value problem or IVP . The solution of the IVP is a function that satisfies both the differential equation and the initial condition, and is called a particular solution of the IVP.   "
},
{
  "id": "subsec-families-of-solutions-11",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-families-of-solutions-11",
  "type": "Example",
  "number": "1.1.21",
  "title": "",
  "body": " Consider the first-order IVP:   The general solution of the differential equation is . To find the particular solution that satisfies the initial condition, we substitute and into the general solution:   Thus, the particular solution of the IVP is .  "
},
{
  "id": "subsec-families-of-solutions-12",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-families-of-solutions-12",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": " Consider the first-order IVP:   The general solution of the differential equation is . To find the particular solution that satisfies the initial condition, we substitute and into the general solution:   Thus, the particular solution of the IVP is .  "
},
{
  "id": "thm-existence-uniqueness",
  "level": "2",
  "url": "sec-basic-terminology.html#thm-existence-uniqueness",
  "type": "Theorem",
  "number": "1.1.23",
  "title": "Existence and Uniqueness of Solutions of Linear IVP’s.",
  "body": " Existence and Uniqueness of Solutions of Linear IVP's   Given an IVP of a linear first-order differential equation, a unique solution exists on an interval containing the initial point, provided that the coefficient functions of the dependent variable and its derivative are continuous on that interval.    The proof of this theorem is beyond the scope of this course, but it is a fundamental result in the theory of differential equations. The theorem guarantees that, under the given conditions, there is a unique solution to the initial value problem in some interval around the initial point. This is important because it ensures that the behavior of the solution is well-defined and predictable, which is crucial for applications in science and engineering.   "
},
{
  "id": "subsec-families-of-solutions-15",
  "level": "2",
  "url": "sec-basic-terminology.html#subsec-families-of-solutions-15",
  "type": "Example",
  "number": "1.1.24",
  "title": "",
  "body": " Consider the first-order IVP:   The coefficient functions of the dependent variable and its derivative are continuous on the entire real line. Therefore, by the Existence and Uniqueness Theorem, there exists a unique solution to this IVP.  The unique solution is in fact , which can be verified by substituting it into the differential equation and checking that it satisfies the initial condition. The solution is valid on the entire real line.   The unique solution to the linear IVP , .    "
},
{
  "id": "exercises-basic-terminology-1",
  "level": "2",
  "url": "sec-basic-terminology.html#exercises-basic-terminology-1",
  "type": "Exercise",
  "number": "1.1.7.1",
  "title": "Verifying Solutions.",
  "body": " Verifying Solutions   In problems (a)-(d), use differentiation to show that the given function is a solution of the equation for all values of the constants.     Equation: , Function:       Equation: , Function:       Equation: , Function:       Equation: , Function:     "
},
{
  "id": "exercises-basic-terminology-2",
  "level": "2",
  "url": "sec-basic-terminology.html#exercises-basic-terminology-2",
  "type": "Exercise",
  "number": "1.1.7.2",
  "title": "Initial Value Problems.",
  "body": " Initial Value Problems   In problems (a)-(f), solve the initial value problem and find the particular solution that satisfies the given initial condition. (That is, find the value(s) of the arbitrary constant(s) in the family of solutions so that the initial condition is satisfied.) In each case, first show that the family of solutions satisfies the equation for all values of the constants. Also state the exact interval in which the particular solution of the initial-value problem exists.      , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        , , Family of solutions:     "
},
{
  "id": "exercises-intro-to-matlab-2",
  "level": "2",
  "url": "sec-basic-terminology.html#exercises-intro-to-matlab-2",
  "type": "Exercise",
  "number": "1.1.8.1",
  "title": "MATLAB Practice.",
  "body": " MATLAB Practice   In problems (a)-(c), use MATLAB or Octave to perform the following tasks:     Define the function and compute its derivative. Plot both the function and its derivative on the same graph for .      Solve the differential equation using MATLAB's symbolic solver. Display the general solution.      Use MATLAB to plot the solution of the initial value problem over the interval .    "
},
{
  "id": "sec-linear-ode",
  "level": "1",
  "url": "sec-linear-ode.html",
  "type": "Section",
  "number": "1.2",
  "title": "Linear Ordinary Differential Equations",
  "body": " Linear Ordinary Differential Equations    To understand that a differential equation is an equation relating a function (say, ) to one or more of its derivatives and that an initial value problem is a differential equation where the initial condition , , is specified.  To understand that the order of a differential equation is the order of the highest derivative in the equation.  To be able to identify the major parts of a differential equation: the dependent variables , the independent variables , and the parameters .  To be able to verify a solution for a differential equation; that is, determine whether a proposed solution to an equation works or not without actually solving the differential equation .     We study differential equations because they are the natural language for describing many phenomena in the physical world. They arise from real-world situations where rates of change are involved. (In other words, we will be spending time with applied mathematics .)  In first- and second-semester calculus, we learned how to compute derivatives and integrals. While we sometimes worked with applications (e.g. related rates, optimization), more often we learned techniques for differentiating and integrating functions in isolation. This is equivalent to the part of the movie The Karate Kid where Mr. Miyagi teaches Daniel the fundamentals of karate by having Daniel paint a fence or apply wax to his car.  This course is the All-Valley Tournament part of the movie. We will be applying the techniques we learned in calculus to solve problems in physics, engineering, and other sciences. Yes, there will be plenty of instances where we will be learning techniques. But we will also spend time applying these techniques. Eventually, we will get to the point where we see a problem and our minds will automatically go \"Paint the fence!\" or \"Wax on! Wax off!\" We will be learning how to model real-world phenomena with differential equations, and then how to solve those equations to make predictions about the phenomena.   "
},
{
  "id": "sec-linear-ode-2",
  "level": "2",
  "url": "sec-linear-ode.html#sec-linear-ode-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  To understand that a differential equation is an equation relating a function (say, ) to one or more of its derivatives and that an initial value problem is a differential equation where the initial condition , , is specified.  To understand that the order of a differential equation is the order of the highest derivative in the equation.  To be able to identify the major parts of a differential equation: the dependent variables , the independent variables , and the parameters .  To be able to verify a solution for a differential equation; that is, determine whether a proposed solution to an equation works or not without actually solving the differential equation .   "
},
{
  "id": "sec-linear-ode-3-1",
  "level": "2",
  "url": "sec-linear-ode.html#sec-linear-ode-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equations applied mathematics "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
