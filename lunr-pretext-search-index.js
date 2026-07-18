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
  "id": "sec-modeling-diff-eq",
  "level": "1",
  "url": "sec-modeling-diff-eq.html",
  "type": "Section",
  "number": "1.2",
  "title": "Modeling with Differential Equations",
  "body": " Modeling with Differential Equations    To understand that a differential equation is an equation relating a function (say, ) to one or more of its derivatives and that an initial value problem is a differential equation where the initial condition , , is specified.  To understand that the order of a differential equation is the order of the highest derivative in the equation.  To be able to identify the major parts of a differential equation: the dependent variables , the independent variables , and the parameters .  To be able to verify a solution for a differential equation; that is, determine whether a proposed solution to an equation works or not without actually solving the differential equation .     The subject of differential equations is one of the most interesting and useful areas of mathematics. We can describe many interesting natural phenomena that involve change using differential equations. In addition, the theory of the subject has broad and important implications.    Physics   We model the velocity of a skydiver falling through the air. The forces acting on the skydiver are gravity and air resistance. The force of gravity is constant, but the force of air resistance is proportional to the velocity of the skydiver. Using Newton's second law, we can write a differential equation that describes the motion of the skydiver:   where is the velocity of the skydiver in meters\/second, is the mass of the skydiver in kilograms, m\/s² is the acceleration due to gravity, is a constant of proportionality, and is a positive exponent usually assumed to be 1. Since , we can rewrite the equation as a differential equation in the form   In the case where , we can solve the differential equation to find the velocity of the skydiver as a function of time. The solution is   where is a constant determined by the initial condition. This is the best possible outcome because it gives us a formula for the velocity of the skydiver at any time .  If , the differential equation becomes nonlinear and more complex to solve analytically. In this case, we can use numerical and graphical methods to approximate the solution. We will use what is called a slope field to visualize the solution of the differential equation. A slope field is a graphical representation of the solutions of a first-order differential equation. It consists of a grid of points in the plane, with each point having a small line segment that represents the slope of the solution curve at that point. By looking at the slope field, we can get an idea of how the solutions behave without actually solving the differential equation.    Slope Fields  The idea of a slope field is to visualize the solutions of a first-order differential equation. If we write a first-order differential equation in the form , we can draw a line segment at each point in the plane with slope . The line segments give us an idea of the direction of the solution curves at each point since each line segment is tangent to the solution curve at that point. By looking at the slope field, we can get an idea of how the solutions behave without actually solving the differential equation.  For example, consider the differential equation . We can draw a slope field for this equation by calculating the slope at each point in a grid of points in the plane. The slope at each point is given by the value of . By drawing line segments with these slopes at each point, we can visualize the behavior of the solutions to the differential equation.  We can also use slope fields to approximate the solution of a differential equation given an initial condition. For example, if we have the initial condition , we can start at the point in the slope field and follow the direction of the line segments to approximate the solution curve. By following the direction of the line segments, we can get an idea of how the solution behaves over time.  Below is some MATLAB code that generates a slope field for the differential equation and plots the solution curve for the initial conditions and .  % 1. Define the grid for the slope field [x, y] = meshgrid(-4:0.4:4, -4:0.4:4); % 2. Calculate the slopes (dy\/dx) at each point dydx = x + y; % 3. Normalize the vectors so they have uniform length L = ones(size(dydx)); M = dydx; lengths = sqrt(L.^2 + M.^2); u = L .\/ lengths; v = M .\/ lengths; % 4. Plot the slope field using quiver figure; quiver(x, y, u, v, 0.5, 'Color', 'blue'); hold on; % 5. Solve the ODE symbolically and plot solution curves syms Y(x) ode = diff(Y,x) == x + Y; % Example 1: Passing through (0, 1) sol1 = dsolve(ode, Y(0) == 1); fplot(sol1, [-4, 4], 'LineWidth', 2, 'Color', 'red'); % Example 2: Passing through (0, -1) sol2 = dsolve(ode, Y(0) == -1); fplot(sol2, [-4, 4], 'LineWidth', 2, 'Color', 'blue'); % 6. Format the plot axis([-4, 4, -4, 4]); title('Slope Field and Solution Curves for dy\/dx = x+y'); xlabel('x'); ylabel('y'); grid on; hold off;     We can use slope fields to visualize the solution curves for the nonlinear differential equation . Let's consider the case where , , , and . (The differential equation then becomes .) We can generate a slope field for this equation and plot the solution curves for different initial conditions.  % 1. Define the differential equation as an anonymous function f = @(t, v) 9.8 - 0.6 .* v.^(0.9); % 2. Set up the grid for the slope field t_range = 0:1:25; % Time range (t) v_range = 0:1:35; % Velocity range (v) [T, V] = meshgrid(t_range, v_range); % Calculate the slopes (dt = 1, dv = f) dt = ones(size(T)); dv = f(T, V); % Normalize vectors so all slope lines are the same length L = sqrt(dt.^2 + dv.^2); dt_norm = dt .\/ L; dv_norm = dv .\/ L; % 3. Plot the slope field figure; quiver(T, V, dt_norm, dv_norm, 0.5, 'Color', 'blue'); hold on; % 4. Calculate and plot numerical solution curves using ode45 tspan = [0 25]; initial_conditions = [0, 10, 30, 35]; % Different starting velocities for i = 1:length(initial_conditions) v0 = initial_conditions(i); [t_sol, v_sol] = ode45(f, tspan, v0); plot(t_sol, v_sol, 'LineWidth', 2, 'DisplayName', ['v_0 = ' num2str(v0)]); end % 5. Format the graph xlabel('Time (t)'); ylabel('Velocity (v)'); title('Slope Field and Solution Curves for dv\/dt = 9.8 - 0.6v^{0.9}'); axis([t_range(1) t_range(end) v_range(1) v_range(end)]); legend('Location', 'southeast'); grid on; hold off;   Slope Field and Solution Curves   It's clear from the slope field and the solution curves that the velocity of the skydiver approaches a terminal velocity as time increases. When , the terminal velocity is . When , the terminal velocity is given by . In this case, the terminal     Mathematics  A problem that arises in several areas of applied mathematics is that of finding a one-parameter family of curves that is orthogonal to a given family at each point in the -plane.  To make the two families of curves orthogonal, at each point their slopes must be negative reciprocals of each other. This means that at each point , if the slope of is , the slope of the curve must be .  How does this result in a differential equation? As an example let the given set of curves be the one-parameter family of parabolas . The slope of a curve in this family is . From the equation for , we have that , so . This means that the curve in the orthogonal family will have slope at the point ; so these curves must satisfy the differential equation .  You will be shown in a later unit that this is a separable differential equation, and you will be given a method for obtaining a formula for the solution. For the equation , the solution can be written as an implicit function of the form , which can be seen to be a one-parameter family of ellipses. The code below produces a set of solution curves from each of the two families. These were simply plotted with a plot routine by using the formulas and with arbitrarily chosen values of the constants and .  % Define the x domain x = linspace(-5, 5, 200); figure; hold on; % 1. Plot the original family of curves: y = c * x^2 % (Varying the constant c) for c = -5:1:5 y_original = c * x.^2; plot(x, y_original, 'b', 'LineWidth', 1.5); end % 2. Plot the orthogonal family of curves: x^2\/2 + y^2 = C % (Varying the constant C) % C_values = 0.5:2:12.5; C_values = [1\/2 2 9\/2 8 25\/2]; for C = C_values f= @(x,y) x.^2\/2 + y.^2 - C; % Plot the ellipses fimplicit(f, [-5 5 -5 5], 'r--', 'LineWidth',1.5); end % Format the plot for proper scaling and readability axis([-5 5 -5 5]); grid on; xlabel('x'); ylabel('y'); title('Orthogonal Trajectories to y = cx^2'); hold off;   Orthogonal Trajectories to y = cx^2     Engineering  The current in amperes in a simple electrical circuit containing a resistor, an inductor, and a sinusoidal electromotive force can be modeled by the equation     where is the inductance in henrys, is the resistance in ohms, and is a periodic function representing the electromotive force in volts. This equation is similar to a spring-mass equation (which we will study later in the course) and is linear in the dependent variable . The solution to this equation can be found analytically. The solution will give us the current in the circuit as a function of time, which is important for understanding the behavior of the circuit under the influence of the sinusoidal electromotive force. The solution is given by     Because of our Existence and Uniqueness Theorem, we know that the solution is unique for a given initial condition. This means that we get a different curve for each value of , and the solution curves do not intersect.  For the equation with henry, ohm, and volts, the solution curves are shown in the figure below. Each curve corresponds to a different initial condition, and the curves do not intersect, which is consistent with the uniqueness of the solution.  % 1. Define the differential equation as an anonymous function f = @(t, y) -0.1*y + 3*sin(t); % We use y to represent the current i(t) for simplicity. % 2. Set up the grid for the slope field t_range = 0:1:30; % Time range (t) y_range = -8:1:8; % Current range (y) [T, Y] = meshgrid(t_range, y_range); % Calculate the slopes (dt = 1, dy = f) dt = ones(size(T)); dy = f(T, Y); % Normalize vectors so all slope lines are the same length L = sqrt(dt.^2 + dy.^2); dt_norm = dt .\/ L; dy_norm = dy .\/ L; % 3. Plot the slope field figure; quiver(T, Y, dt_norm, dy_norm, 0.5, 'Color', 'blue'); hold on; % 4. Calculate and plot numerical solution curves using ode45 tspan = [0 30]; initial_conditions = [-8, -4, 0, 4]; % Different starting currents for i = 1:length(initial_conditions) y0 = initial_conditions(i); [t_sol, y_sol] = ode45(f, tspan, y0); plot(t_sol, y_sol, 'LineWidth', 2, 'DisplayName', ['i_0 = ' num2str(y0)]); end % 5. Format the graph xlabel('Time (t)'); ylabel('Current (i)'); title('Slope Field and Solution Curves for i''(t) +0.1i(t)=3 sin(t)'); axis([t_range(1) t_range(end) y_range(1) y_range(end)]); legend('Location', 'southeast'); grid on; hold off;   Slope Field and Solution Curves for i'(t) +0.1i(t)=3 sin(t)   These curves were drawn by a MATLAB program that solves differential equations and plots a slope field of tangent vectors to the solution curves. This means that even though an analytic formula exists for the solution, so that you could plot the curves with the code above, it is possible to check the solutions using MATLAB or any differential equations program. It can be seen, both from the formula for the solution and from the graph itself, that in the limit as , the solution approaches a periodic function with the same period as the electromotive force. This is an example of a steady-state solution , which is a solution that the system approaches as time goes to infinity, regardless of the initial conditions. The function represents the transient part of the solution, which decays to zero as time increases.    Ecology  In ecology, we can model the population of a species using differential equations. One common model is the logistic growth model, which describes how a population grows rapidly at first and then slows down as it approaches a maximum sustainable population size, known as the carrying capacity. The logistic growth model can be expressed as a differential equation:     The particular version of the logistic growth model we will consider is the one that describes the growth of a population of size at time , where is the intrinsic growth rate and is the carrying capacity , the maximum population size that the environment can sustain. When the size of the population is small compared to the carrying capacity, the population grows exponentially, following the pattern .  This simple version of the logistic growth model can be solved analytically, and the solution is given by:     This solution shows that as time increases, the population approaches the carrying capacity , and the growth rate slows down. The logistic growth model is widely used in ecology to study population dynamics and to make predictions about the future growth of populations under different environmental conditions. It is also used in other fields, such as epidemiology, to model the spread of diseases.  The graph below shows the solution curves for the logistic growth model with different initial conditions. The carrying capacity is set to , and the intrinsic growth rate is set to . The solution curves show how the population grows over time and approaches the carrying capacity, regardless of the initial population size. (We should say positive initial population size ; negative initial population size is not biologically meaningful.) The curves do not intersect, which is consistent with the uniqueness of the solution.  % 1. Define the differential equation as an anonymous function f = @(t, p) 0.2 .* p .* (1 - p .\/ 100); % 2. Set up the grid for the slope field t_range = 0:1:30; % Time range (t) p_range = 0:5:140; % Population range (p) [T, P] = meshgrid(t_range, p_range); % Calculate the slopes (dt = 1, dp = f) dt = ones(size(T)); dp = f(T, P); % Normalize vectors so all slope lines are the same length L = sqrt(dt.^2 + dp.^2); dt_norm = dt .\/ L; dp_norm = dp .\/ L; % 3. Plot the slope field figure; quiver(T, P, dt_norm, dp_norm, 0.5, 'Color', 'blue'); hold on; % 4. Calculate and plot numerical solution curves using ode45 tspan = [0 30]; initial_conditions = [5 10 20 40 70 120 140]; % Different starting populations for i = 1:length(initial_conditions) p0 = initial_conditions(i); [t_sol, p_sol] = ode45(f, tspan, p0); plot(t_sol, p_sol, 'LineWidth', 2, 'DisplayName', ['p_0 = ' num2str(p0)]); end % 5. Format the graph xlabel('Time (t)'); ylabel('Population (p)'); title('Slope Field and Solution Curves for P''(t) = 0.2P(1-P\/100)'); axis([t_range(1) t_range(end) p_range(1) p_range(end)]); legend('Location', 'southeast'); grid on; hold off;   Slope Field and Solution Curves for P'(t) = 0.2P(1-P\/100)    "
},
{
  "id": "sec-modeling-diff-eq-2",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#sec-modeling-diff-eq-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  To understand that a differential equation is an equation relating a function (say, ) to one or more of its derivatives and that an initial value problem is a differential equation where the initial condition , , is specified.  To understand that the order of a differential equation is the order of the highest derivative in the equation.  To be able to identify the major parts of a differential equation: the dependent variables , the independent variables , and the parameters .  To be able to verify a solution for a differential equation; that is, determine whether a proposed solution to an equation works or not without actually solving the differential equation .   "
},
{
  "id": "subsec-Physics-2-8",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#subsec-Physics-2-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope field "
},
{
  "id": "subsec-Physics-4-4",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#subsec-Physics-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "terminal velocity "
},
{
  "id": "subsec-Mathematics-2",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#subsec-Mathematics-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "subsec-Engineering-10",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#subsec-Engineering-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "steady-state solution transient "
},
{
  "id": "subsec-Ecology-4",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#subsec-Ecology-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intrinsic growth rate carrying capacity "
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
