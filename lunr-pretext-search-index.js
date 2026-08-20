var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "MA224BookFront-3",
  "level": "1",
  "url": "MA224BookFront-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This book and all related activities emanate from the following works:    The Ordinary Differential Equations Project by Thomas Judson  Elementary Differential Equations by William Trench    "
},
{
  "id": "sec-basic-terminology",
  "level": "1",
  "url": "sec-basic-terminology.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic Terminology and Concepts",
  "body": " Basic Terminology and Concepts    To understand that a differential equation is an equation relating a function (say, ) to one or more of its derivatives and that an initial value problem is a differential equation where the initial condition , , is specified.  To understand that the order of a differential equation is the order of the highest derivative in the equation.  To be able to identify the major parts of a differential equation: the dependent variables , the independent variables , and the parameters .  To be able to verify a solution for a differential equation; that is, determine whether a proposed solution to an equation works or not without actually solving the differential equation .  To understand that the general solution of a differential equation is an equation that contains all possible solutions of the differential equation, and that the particular solution is a solution that satisfies a specific initial condition.  To understand that a family of solutions is a set of solutions to a differential equation that are parameterized by one or more arbitrary constants.   To understand that a linear differential equation is a differential equation in which the dependent variable and its derivatives appear to the first power and are not multiplied together, and that a nonlinear differential equation is a differential equation that is not linear.      We study differential equations because they are the natural language for describing many phenomena in the physical world. They arise from real-world situations where rates of change are involved. (In other words, we will be spending time with applied mathematics .)  In first- and second-semester calculus, we learned how to compute derivatives and integrals. While we sometimes worked with applications (e.g. related rates, optimization), more often we learned techniques for differentiating and integrating functions in isolation. This is equivalent to the part of the movie The Karate Kid where Mr. Miyagi teaches Daniel the fundamentals of karate by having Daniel paint a fence or apply wax to his car.  This course is the All-Valley Tournament part of the movie. We will be applying the techniques we learned in calculus to solve problems in physics, engineering, and other sciences. Yes, there will be plenty of instances where we will be learning techniques. But we will also spend time applying these techniques. Eventually, we will get to the point where we see a problem and our minds will automatically go \"Paint the fence!\" or \"Wax on! Wax off!\" We will be learning how to model real-world phenomena with differential equations, and then how to solve those equations to make predictions about the phenomena.    What is a Differential Equation?  A differential equation is an equation that relates a function to one or more of its derivatives. For example, the equation   is a differential equation that relates the function to its derivative . The equation   is a differential equation that relates the function to its derivative . The equation   is a differential equation that relates the function to its first and second derivatives.  Our goal, given a differential equation, is to find a function that satisfies the equation. If possible, we would like to find all such functions. One of the lessons we will learn in the course is that this is not always possible. We will then learn how to find approximate solutions.  Here are some examples of differential equations and the contexts in which they arise:   Biology  In biology, we might model population growth with a differential equation like , where is the population at time and is the constant of proportionality .  This is a fairly simple model of population growth, and it is called the exponential growth model . It assumes that the population grows at a rate that is proportional to the current population. This model does OK over short periods of time, but it is not very realistic over longer periods of time, since it does not take into account factors such as limited resources, competition, and predation. However, it is a good starting point for understanding population growth.  Other models are more complex.    Physics  It is known in physics that all forces acting on a particular moving body at time depend only on the position , velocity , and acceleration of the body at time .  Newton's second law of motion states that the net force acting on a body is equal to the mass of the body multiplied by its acceleration. This can be expressed as a differential equation:   where is the net force acting on the body at time , is the mass of the body, and is the acceleration of the body at time . This means that we will generally have a differential equation to describe the forces on an object of the form:   where is some function that describes the forces acting on the body. An example of such an equation is the spring-mass equation , which has the form:   Here, is the mass of the object, is the damping coefficient , is the spring constant , and is an external force applied to the system.   We note that differential equations contain derivatives in either Leibniz notation (e.g. ) or prime notation (e.g. ). We will use both notations throughout the course, and we will be comfortable with both. When we use prime notation, we will often write for the first derivative and for the second derivative, without explicitly stating the variable of differentiation.  Here are some more examples of differential equations:   is a more sophisticated version of the population growth model we saw earlier. This is a logistic growth model with harvesting . In this case, is the intrinsic growth rate, is the carrying capacity (the maximum population size that the environment can sustain), and is the harvesting rate.  is an example of the previously discussed spring-mass equation . We will see plenty of these later in the course.  is an example of a RLC circuit equation with alternating current. is the current, is the resistance, is the inductance, and is the capacitance.  is an example of the heat equation , which models the distribution of heat (or variation in temperature) in a given region over time. Here, is the temperature at position and time , and is the thermal diffusivity. This is an example of a partial differential equation . These types of equations are studied in more advanced courses.     Parts of a Differential Equation  There are several parts to a differential equation:   The dependent variable , which is the function we are trying to find (e.g., ).  The independent variable , which is the variable with respect to which we are taking derivatives (e.g., ).  Parameters , which are constants or functions that appear in the equation but are not derivatives. We will treat them as constants when we are solving the equation. (In particular, parameters will show up in the solution.)  The order of the differential equation, which is the highest derivative that appears in the equation.   Here are several examples of how these parts appear in different types of differential equations:   Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  There are no parameters in this equation.  The order of the equation is 1, since the highest derivative is the first derivative.     Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameter is .  The order of the equation is 1, since the highest derivative is the first derivative.     Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameters are , , and .  The order of the equation is 1, since the highest derivative is the first derivative.     Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameters are , , and .  The order of the equation is 2, since the highest derivative is the second derivative.     Consider the differential equation . In this equation:   The dependent variable is .  The independent variable is .  The parameter is .  The order of the equation is 2, since the highest derivative is the second derivative.     Consider Van de Pol's equation . In this equation:   The dependent variable is .  The independent variable is .  The parameter is .  The order of the equation is 2, since the highest derivative is the second derivative.     A note about dependent and independent variables: In many applications, the dependent variable is a function of time. In these cases, we will often use as the independent variable. However, there are also many applications where the dependent variable is a function of space or some other quantity. In these cases, we will use a different independent variable (e.g., , , or ). The techniques we learn in this course will apply regardless of the choice of independent variable.    Solutions of Differential Equations   A solution of a differential equation is a function that satisfies the equation. For example, the function is a solution of the differential equation , where is an arbitrary constant. The function is a solution of the differential equation , where is an arbitrary constant. The function is a solution of the differential equation , where is an arbitrary constant.  In general, a solution of a differential equation will contain one or more arbitrary constants. The number of arbitrary constants in the solution is equal to the order of the equation. For example, the general solution of a first-order differential equation will contain one arbitrary constant, while the general solution of a second-order differential equation will contain two arbitrary constants.  In our earlier calculus experience, we often found a single solution to a problem. In this course, we will often be interested in finding the general solution of a differential equation, which contains all possible solutions. We will also be interested in finding particular solutions that satisfy specific initial conditions or boundary conditions . An initial condition is a value of the solution function at a specific point, while a boundary condition is a value of the solution function at more than one point.  An initial value problem is a differential equation together with an initial condition. Recall that in our earlier calculus experience, when we would integrate a function, we would include a constant of integration. If we also had an initial condition, we could determine the value of this constant.  Similarly, when we solve a differential equation, we often find a general solution that contains arbitrary constants. The initial condition allows us to determine the specific values of these constants, leading to a particular solution. A solution to an initial-value problem must satisfy both the differential equation and the initial condition. In particular, the solution function must be defined on an interval containing the initial point.  There are also boundary value problems , where we are given conditions at more than one point. We will not be studying these types of problems in this course, but they are important in many applications.    Finding Solutions  Our goal in this course is to find solutions to differential equations. We will learn various techniques for finding solutions, including both analytical and numerical methods. Analytical methods involve finding an exact solution in terms of known functions, while numerical methods involve approximating the solution using computational algorithms. As we will see, we cannot always find exact solutions analytically. For example, the differential equation does not have an elementary function as its solution because we cannot integrate . In such cases, we will rely on numerical or graphical methods to approximate the solution.    Verifying Solutions  While we will be spending most of this course trying to find ways to solve differential equations, it turns out that verifying that a given function is a solution of a differential equation is often much easier than finding the solution in the first place.  For example, let's verify that the function is a solution of the differential equation . To do this, we substitute and its derivatives into the equation and check if the equality holds.     Substituting these into the left-hand side of the equation gives us:     This works for every possible value of , so we have verified that is indeed a solution of the differential equation.  However, is not the only solution of the equation. For example, the function is also a solution since if we substitute it into the equation for , we get:     Therefore, is a solution of the differential equation.  In fact, the general solution of the equation is , where and are arbitrary constants.    Determine whether is a solution to the differential equation . If it is, find the largest set of -values for which is a valid solution.    We note that the proposed solution is defined on and differentiable on . If we set , then the chain rule gives us   Thus is a solution of the differential equation for . (There are other solutions that are valid outside this interval.)       In-Class Worksheet: Basic Terminology   For each of the following differential equations, identify the dependent variable, independent variable, parameters, and order of the equation.         Dependent variable:  Independent variable:  Parameters: none  Order: 1         Dependent variable:  Independent variable:  Parameters:  Order: 1         Dependent variable:  Independent variable:  Parameters:  Order: 1         Dependent variable:  Independent variable:  Parameters:  Order: 2         Dependent variable:  Independent variable:  Parameters:  Order: 3         Dependent variable:  Independent variable:  Parameters:  Order: 2         Dependent variable:  Independent variable:  Parameters: none  Order: 2         Dependent variable:  Independent variable:  Parameters:  Order: 2       Linear Differential Equations  A linear differential equation is a differential equation in which the dependent variable and its derivatives appear to the first power and are not multiplied together. The dependent variable and its derivatives can be multiplied by functions of the independent variable, but they cannot be multiplied by each other or raised to any power other than one. Lastly, the dependent variable and its derivatives cannot appear inside a function such as a sine or cosine.   The equation is a linear differential equation.    is a linear differential equation. (Here, we assume that is a function of .)    The equation is not a linear differential equation because the dependent variable appears to the second power.    The equation is not a linear differential equation because the dependent variable appears inside the sine function.     Families of Solutions  In general, a solution of a differential equation will contain one or more arbitrary constants. The number of arbitrary constants in the solution is equal to the order of the equation. For example, the general solution of a first-order differential equation will contain one arbitrary constant, while the general solution of a second-order differential equation will contain two arbitrary constants. The general solution of a first-order equation will be a family of curves parameterized by the arbitrary constant. We call this a one-parameter family of solutions . A second-order equation will be a family of curves parameterized by two arbitrary constants, called a two-parameter family of solutions .   The differential equation has the general solution , which is a one-parameter family of solutions. Each value of gives a different solution curve.   Curves of the one-parameter family of solutions      The differential equation has the general solution , which is a one-parameter family of solutions. Each value of gives a different solution curve.   Curves of the one-parameter family of solutions      The differential equation has the general solution , which is a two-parameter family of solutions. Each pair of values gives a different solution curve.   Note that in the above examples, the solution curves do not intersect. This is a general property of solutions to linear first-order differential equations. Additionally, the collection of all solution curves in the plane will fill up the plane. That is, every point in the plane will belong to a unique solution curve.  Non-linear differential equations can have solution curves that intersect. For example, the differential equation has the general solution , which is a one-parameter family of solutions. The solution curves for this equation intersect with the solution curve . (This is problematic because, for instance, the initial condition could correspond to multiple solution curves.)   Curves of the one-parameter family of solutions    Linear differential equations have the property that their solution curves do not intersect, while non-linear differential equations can have solution curves that intersect. This distinction is important when analyzing the behavior of solutions to different types of differential equations. In particular, it is important to note that the uniqueness of solutions to initial value problems is guaranteed for linear differential equations, while non-linear equations may have multiple solutions for the same initial condition.    A first-order differential equation with an initial condition is called a first-order initial value problem or IVP . The solution of the IVP is a function that satisfies both the differential equation and the initial condition, and is called a particular solution of the IVP.     Consider the first-order IVP:   The general solution of the differential equation is . To find the particular solution that satisfies the initial condition, we substitute and into the general solution:   Thus, the particular solution of the IVP is .    Consider the first-order IVP:   The general solution of the differential equation is . To find the particular solution that satisfies the initial condition, we substitute and into the general solution:   Thus, the particular solution of the IVP is .   We talked above about the fact that solutions for linear first-order initial value problems are unique. This is a very important property of linear first-order differential equations.   Existence and Uniqueness of Solutions of Linear IVP's   Given an IVP of a linear first-order differential equation, a unique solution exists on an interval containing the initial point, provided that the coefficient functions of the dependent variable and its derivative are continuous on that interval.    The proof of this theorem is beyond the scope of this course, but it is a fundamental result in the theory of differential equations. The theorem guarantees that, under the given conditions, there is a unique solution to the initial value problem in some interval around the initial point. This is important because it ensures that the behavior of the solution is well-defined and predictable, which is crucial for applications in science and engineering.     Consider the first-order IVP:   The coefficient functions of the dependent variable and its derivative are continuous on the entire real line. Therefore, by the Existence and Uniqueness Theorem, there exists a unique solution to this IVP.  The unique solution is in fact , which can be verified by substituting it into the differential equation and checking that it satisfies the initial condition. The solution is valid on the entire real line.   The unique solution to the linear IVP , .        Verifying Solutions   In problems (a)-(d), use differentiation to show that the given function is a solution of the equation for all values of the constants.     Equation: , Function:       Equation: , Function:       Equation: , Function:       Equation: , Function:       Initial Value Problems   In problems (a)-(f), solve the initial value problem and find the particular solution that satisfies the given initial condition. (That is, find the value(s) of the arbitrary constant(s) in the family of solutions so that the initial condition is satisfied.) In each case, first show that the family of solutions satisfies the equation for all values of the constants. Also state the exact interval in which the particular solution of the initial-value problem exists.      , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        , , Family of solutions:        Introduction to MATLAB  Technology can prove very useful when studying differential equations. Software packages such Maple, Mathematica, and SageMath each have their advantages and disadvantages. We will use MATLAB, used extensively by engineers, as our choice of software. Norwich has a MATLAB license available. You can access MATLAB through the university's computing resources, and even use an online version so you don't have to download anything.  For our purposes, some MATLAB cells are embedded into the textbook, We are actually embedding a cell that uses Octave, which is a free and open-source alternative to MATLAB. The syntax is the same, so you can use either one. so there is nothing to install on your computer. Simply, evaluate the cell. You can even change the preloaded commands in the cell if you wish. For example, let us evaluate the derivative of   Note that anything following a percentage sign % is a comment. The output of the cell shows that the derivative of is .  You can use MATLAB to take derivatives of more complicated functions, and it can also be used to solve differential equations, initial value problems, and plot solutions. For instance, we can use MATLAB to solve the differential equation with the initial condition . The solution is .   We can use MATLAB to plot functions. For example, we can plot the function as well as its derivative on the same graph. (To accomplish this, we will use the linspace command to create a range of values, and then evaluate the function and its derivative at those values. We will then use the plot command to create the graph.)  The executable embedded cells we included above have a limitation: we cannot include any commands for graphing. When we want to show you commands for graphing, we will include a non-executable cell with the proper commands, whose code you will need to copy and paste into a MATLAB session. (There's a small copy icon in the upper right-hand corner of the cell.) We'll usually put a copy of the resulting graph in as a figure below the code.  % Define the symbolic variable syms x % Define the function f = x^2 * cos(x); % Calculate the derivative df = diff(f, x); % Create a range of x values for plotting % In this case, we grab 100 evenly spaced values % from -10 to 10 x_vals = linspace(-10, 10, 100); % Evaluate the function and its derivative at the x values f_vals = double(subs(f, x, x_vals)); df_vals = double(subs(df, x, x_vals)); % Plot the function and its derivative figure; plot(x_vals, f_vals, 'b', 'LineWidth', 2); % Function in blue hold on; plot(x_vals, df_vals, 'r', 'LineWidth', 2); % Derivative in red hold off; % Add labels and legend xlabel('x'); ylabel('Function values'); title('Function and its Derivative'); legend('f(x) = x^2 cos(x)', 'f''(x) = 2x cos(x) - x^2 sin(x)');  You should see a graph with the function in blue and its derivative in red.   As we progress through the course, we will introduce more MATLAB commands and techniques that will help you analyze and visualize differential equations effectively.  Note that the MATLAB commands used in this section are also compatible with Octave, which is a free and open-source alternative to MATLAB. You can use either software to perform the calculations and visualizations described here.  You will find plenty of resources online to learn more about MATLAB and Octave, including tutorials, documentation, and forums where you can ask questions and share knowledge with other users. A good place to start is the official MATLAB documentation at https:\/\/www.mathworks.com\/help\/matlab\/ or the Octave documentation at https:\/\/octave.org\/doc\/interpreter\/ .   MATLAB Exercises   MATLAB Practice   In problems (a)-(c), use MATLAB or Octave to perform the following tasks:     Define the function and compute its derivative. Plot both the function and its derivative on the same graph for .      Solve the differential equation using MATLAB's symbolic solver. Display the general solution.      Use MATLAB to plot the solution of the initial value problem over the interval .       "
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
  "body": " Modeling with Differential Equations    To understand that first-order differential equations can be used to model various real-world phenomena.  To understand that slope fields -- collections of short arrows drawn tangent to solution curves -- can be used to visualize the solutions of first-order differential equations.  To understand that some first-order differential equations can be solved analytically, while others require numerical methods to approximate the solution.     The subject of differential equations is one of the most interesting and useful areas of mathematics. We can describe many interesting natural phenomena that involve change using differential equations. In addition, the theory of the subject has broad and important implications.    Physics   We model the velocity of a skydiver falling through the air. The forces acting on the skydiver are gravity and air resistance. The force of gravity is constant, but the force of air resistance is proportional to the velocity of the skydiver. Using Newton's second law, we can write a differential equation that describes the motion of the skydiver:   where is the velocity of the skydiver in meters\/second, is the mass of the skydiver in kilograms, m\/s² is the acceleration due to gravity, is a constant of proportionality, and is a positive exponent usually assumed to be 1. Since , we can rewrite the equation as a differential equation in the form   In the case where , we can solve the differential equation to find the velocity of the skydiver as a function of time. The solution is   where is a constant determined by the initial condition. This is the best possible outcome because it gives us a formula for the velocity of the skydiver at any time .  If , the differential equation becomes nonlinear and more complex to solve analytically. In this case, we can use numerical and graphical methods to approximate the solution. We will use what is called a slope field to visualize the solution of the differential equation. A slope field is a graphical representation of the solutions of a first-order differential equation. It consists of a grid of points in the plane, with each point having a small line segment that represents the slope of the solution curve at that point. By looking at the slope field, we can get an idea of how the solutions behave without actually solving the differential equation.    Slope Fields  The idea of a slope field is to visualize the solutions of a first-order differential equation. If we write a first-order differential equation in the form , we can draw a line segment at each point in the plane with slope . The line segments give us an idea of the direction of the solution curves at each point since each line segment is tangent to the solution curve at that point. By looking at the slope field, we can get an idea of how the solutions behave without actually solving the differential equation.  For example, consider the differential equation . We can draw a slope field for this equation by calculating the slope at each point in a grid of points in the plane. The slope at each point is given by the value of . By drawing line segments with these slopes at each point, we can visualize the behavior of the solutions to the differential equation.  We can also use slope fields to approximate the solution of a differential equation given an initial condition. For example, if we have the initial condition , we can start at the point in the slope field and follow the direction of the line segments to approximate the solution curve. By following the direction of the line segments, we can get an idea of how the solution behaves over time.  Below is some MATLAB code that generates a slope field for the differential equation and plots the solution curve for the initial conditions and .  % 1. Define the grid for the slope field [x, y] = meshgrid(-4:0.4:4, -4:0.4:4); % 2. Calculate the slopes (dy\/dx) at each point dydx = x + y; % 3. Normalize the vectors so they have uniform length L = ones(size(dydx)); M = dydx; lengths = sqrt(L.^2 + M.^2); u = L .\/ lengths; v = M .\/ lengths; % 4. Plot the slope field using quiver figure; quiver(x, y, u, v, 0.5, 'Color', 'blue'); hold on; % 5. Solve the ODE symbolically and plot solution curves syms Y(x) ode = diff(Y,x) == x + Y; % Example 1: Passing through (0, 1) sol1 = dsolve(ode, Y(0) == 1); fplot(sol1, [-4, 4], 'LineWidth', 2, 'Color', 'red'); % Example 2: Passing through (0, -1) sol2 = dsolve(ode, Y(0) == -1); fplot(sol2, [-4, 4], 'LineWidth', 2, 'Color', 'blue'); % 6. Format the plot axis([-4, 4, -4, 4]); title('Slope Field and Solution Curves for dy\/dx = x+y'); xlabel('x'); ylabel('y'); grid on; hold off;     We can use slope fields to visualize the solution curves for the nonlinear differential equation . Let's consider the case where , , , and . (The differential equation then becomes .) We can generate a slope field for this equation and plot the solution curves for different initial conditions.  % 1. Define the differential equation as an anonymous function f = @(t, v) 9.8 - 0.6 .* v.^(0.9); % 2. Set up the grid for the slope field t_range = 0:1:25; % Time range (t) v_range = 0:1:35; % Velocity range (v) [T, V] = meshgrid(t_range, v_range); % Calculate the slopes (dt = 1, dv = f) dt = ones(size(T)); dv = f(T, V); % Normalize vectors so all slope lines are the same length L = sqrt(dt.^2 + dv.^2); dt_norm = dt .\/ L; dv_norm = dv .\/ L; % 3. Plot the slope field figure; quiver(T, V, dt_norm, dv_norm, 0.5, 'Color', 'blue'); hold on; % 4. Calculate and plot numerical solution curves using ode45 tspan = [0 25]; initial_conditions = [0, 10, 30, 35]; % Different starting velocities for i = 1:length(initial_conditions) v0 = initial_conditions(i); [t_sol, v_sol] = ode45(f, tspan, v0); plot(t_sol, v_sol, 'LineWidth', 2, 'DisplayName', ['v_0 = ' num2str(v0)]); end % 5. Format the graph xlabel('Time (t)'); ylabel('Velocity (v)'); title('Slope Field and Solution Curves for dv\/dt = 9.8 - 0.6v^{0.9}'); axis([t_range(1) t_range(end) v_range(1) v_range(end)]); legend('Location', 'southeast'); grid on; hold off;   Slope Field and Solution Curves   It's clear from the slope field and the solution curves that the velocity of the skydiver approaches a terminal velocity as time increases. When , the terminal velocity is . When , the terminal velocity is given by .     Mathematics  A problem that arises in several areas of applied mathematics is that of finding a one-parameter family of curves that is orthogonal to a given family at each point in the -plane.  To make the two families of curves orthogonal, at each point their slopes must be negative reciprocals of each other. This means that at each point , if the slope of is , the slope of the curve must be .  How does this result in a differential equation? As an example let the given set of curves be the one-parameter family of parabolas . The slope of a curve in this family is . From the equation for , we have that , so . This means that the curve in the orthogonal family will have slope at the point ; so these curves must satisfy the differential equation .  You will be shown in a later unit that this is a separable differential equation, and you will be given a method for obtaining a formula for the solution. For the equation , the solution can be written as an implicit function of the form , which can be seen to be a one-parameter family of ellipses. The code below produces a set of solution curves from each of the two families. These were simply plotted with a plot routine by using the formulas and with arbitrarily chosen values of the constants and .  % Define the x domain x = linspace(-5, 5, 200); figure; hold on; % 1. Plot the original family of curves: y = c * x^2 % (Varying the constant c) for c = -5:1:5 y_original = c * x.^2; plot(x, y_original, 'b', 'LineWidth', 1.5); end % 2. Plot the orthogonal family of curves: x^2\/2 + y^2 = C % (Varying the constant C) % C_values = 0.5:2:12.5; C_values = [1\/2 2 9\/2 8 25\/2]; for C = C_values f= @(x,y) x.^2\/2 + y.^2 - C; % Plot the ellipses fimplicit(f, [-5 5 -5 5], 'r--', 'LineWidth',1.5); end % Format the plot for proper scaling and readability axis([-5 5 -5 5]); grid on; xlabel('x'); ylabel('y'); title('Orthogonal Trajectories to y = cx^2'); hold off;   Orthogonal Trajectories to y = cx^2     Engineering  The current in amperes in a simple electrical circuit containing a resistor, an inductor, and a sinusoidal electromotive force can be modeled by the equation     where is the inductance in henrys, is the resistance in ohms, and is a periodic function representing the electromotive force in volts. This equation is similar to a spring-mass equation (which we will study later in the course) and is linear in the dependent variable . The solution to this equation can be found analytically. The solution will give us the current in the circuit as a function of time, which is important for understanding the behavior of the circuit under the influence of the sinusoidal electromotive force. The solution is given by     Because of our Existence and Uniqueness Theorem, we know that the solution is unique for a given initial condition. This means that we get a different curve for each value of , and the solution curves do not intersect.  For the equation with henry, ohm, and volts, the solution curves are shown in the figure below. Each curve corresponds to a different initial condition, and the curves do not intersect, which is consistent with the uniqueness of the solution.  % 1. Define the differential equation as an anonymous function f = @(t, y) -0.1*y + 3*sin(t); % We use y to represent the current i(t) for simplicity. % 2. Set up the grid for the slope field t_range = 0:1:30; % Time range (t) y_range = -8:1:8; % Current range (y) [T, Y] = meshgrid(t_range, y_range); % Calculate the slopes (dt = 1, dy = f) dt = ones(size(T)); dy = f(T, Y); % Normalize vectors so all slope lines are the same length L = sqrt(dt.^2 + dy.^2); dt_norm = dt .\/ L; dy_norm = dy .\/ L; % 3. Plot the slope field figure; quiver(T, Y, dt_norm, dy_norm, 0.5, 'Color', 'blue'); hold on; % 4. Calculate and plot numerical solution curves using ode45 tspan = [0 30]; initial_conditions = [-8, -4, 0, 4]; % Different starting currents for i = 1:length(initial_conditions) y0 = initial_conditions(i); [t_sol, y_sol] = ode45(f, tspan, y0); plot(t_sol, y_sol, 'LineWidth', 2, 'DisplayName', ['i_0 = ' num2str(y0)]); end % 5. Format the graph xlabel('Time (t)'); ylabel('Current (i)'); title('Slope Field and Solution Curves for i''(t) +0.1i(t)=3 sin(t)'); axis([t_range(1) t_range(end) y_range(1) y_range(end)]); legend('Location', 'southeast'); grid on; hold off;   Slope Field and Solution Curves for i'(t) +0.1i(t)=3 sin(t)   These curves were drawn by a MATLAB program that solves differential equations and plots a slope field of tangent vectors to the solution curves. This means that even though an analytic formula exists for the solution, so that you could plot the curves with the code above, it is possible to check the solutions using MATLAB or any differential equations program. It can be seen, both from the formula for the solution and from the graph itself, that in the limit as , the solution approaches a periodic function with the same period as the electromotive force. This is an example of a steady-state solution , which is a solution that the system approaches as time goes to infinity, regardless of the initial conditions. The function represents the transient part of the solution, which decays to zero as time increases.    Ecology  In ecology, we can model the population of a species using differential equations. One common model is the logistic growth model , which describes how a population grows rapidly at first and then slows down as it approaches a maximum sustainable population size, known as the carrying capacity . The logistic growth model can be expressed as a differential equation:     The particular version of the logistic growth model we will consider is the one that describes the growth of a population of size at time , where is the intrinsic growth rate and is the carrying capacity , the maximum population size that the environment can sustain. When the size of the population is small compared to the carrying capacity, the population grows exponentially, following the pattern .  This simple version of the logistic growth model can be solved analytically, and the solution is given by:     This solution shows that as time increases, the population approaches the carrying capacity , and the growth rate slows down. The logistic growth model is widely used in ecology to study population dynamics and to make predictions about the future growth of populations under different environmental conditions. It is also used in other fields, such as epidemiology, to model the spread of diseases.  The graph below shows the solution curves for the logistic growth model with different initial conditions. The carrying capacity is set to , and the intrinsic growth rate is set to . The solution curves show how the population grows over time and approaches the carrying capacity, regardless of the initial population size. (We should say positive initial population size ; negative initial population size is not biologically meaningful.) The curves do not intersect, which is consistent with the uniqueness of the solution.  % 1. Define the differential equation as an anonymous function f = @(t, p) 0.2 .* p .* (1 - p .\/ 100); % 2. Set up the grid for the slope field t_range = 0:1:30; % Time range (t) p_range = 0:5:140; % Population range (p) [T, P] = meshgrid(t_range, p_range); % Calculate the slopes (dt = 1, dp = f) dt = ones(size(T)); dp = f(T, P); % Normalize vectors so all slope lines are the same length L = sqrt(dt.^2 + dp.^2); dt_norm = dt .\/ L; dp_norm = dp .\/ L; % 3. Plot the slope field figure; quiver(T, P, dt_norm, dp_norm, 0.5, 'Color', 'blue'); hold on; % 4. Calculate and plot numerical solution curves using ode45 tspan = [0 30]; initial_conditions = [5 10 20 40 70 120 140]; % Different starting populations for i = 1:length(initial_conditions) p0 = initial_conditions(i); [t_sol, p_sol] = ode45(f, tspan, p0); plot(t_sol, p_sol, 'LineWidth', 2, 'DisplayName', ['p_0 = ' num2str(p0)]); end % 5. Format the graph xlabel('Time (t)'); ylabel('Population (p)'); title('Slope Field and Solution Curves for P''(t) = 0.2P(1-P\/100)'); axis([t_range(1) t_range(end) p_range(1) p_range(end)]); legend('Location', 'southeast'); grid on; hold off;   Slope Field and Solution Curves for P'(t) = 0.2P(1-P\/100)     Neurology  A final example is another application of mathematics to biology, and is currently of interest to research mathematicians as well as to computational neuroscientists. The equation is a simplistic version of an equation representing the activity level of certain nerve cells in the brain. The function is the percent of nerve cells that are active at time . The function is an external stimulus, and is a threshold value. The function is a sigmoid function, which is a type of function that has an S-shaped curve, similar to that of a logistic function. The sigmoid function is often used to model the response of nerve cells to stimuli, as it captures the idea that the response of the cells increases rapidly once the stimulus exceeds a certain threshold, and then levels off as the stimulus continues to increase. The function is often chosen to be a logistic function of the form , which varies from 0 to 1 as varies from negative infinity to positive infinity. This is a highly nonlinear function, making the differential equation difficult to solve analytically. (In fact, no exact solution exists.) However, we can numerically approximate the solution using methods such as Euler's method or Runge-Kutta methods, which we will study in a later unit.  The graph below shows the solution curves for the differential equation with different initial conditions. The external stimulus is set to a periodic function, and the threshold is set to 0.5. We arbitrarily set .  % Parameters theta = 0.5; % Define your theta parameter here (set to 0.5 as a placeholder) t_span = [0, 3]; initial_conditions = [0.05, 0.1, 0.3, 0.48, 0.52, 0.6, 0.7, 0.9, 0.95]; % Define the ODE system using an anonymous function % S(z) = 1 \/ (1 + exp(-15 * z)) % e(t) = -0.3 * cos(2 * pi * t) f = @(t, x) -x + 1 .\/ (1 + exp(-15 * (x - theta - 0.3 * cos(2 * pi * t)))); %% Step 1: Generate and Plot the Slope Field % Define grid spacing for the slope segments t_vectors = linspace(t_span(1), t_span(2), 25); x_vectors = linspace(-0.1, 1.1, 25); % Adjusted bounds to capture all ICs cleanly [T, X] = meshgrid(t_vectors, x_vectors); % Calculate slopes at each grid intersection Slopes = f(T, X); % Normalize vectors to ensure uniform length across the field dt = 1 .\/ sqrt(1 + Slopes.^2); dx = Slopes .\/ sqrt(1 + Slopes.^2); figure; % Draw the normalized directional arrows quiver(T, X, dt, dx, 0.4, 'Color', [0.6 0.6 0.6], 'LineWidth', 0.8); hold on; %% Step 2: Solve and Plot Each Initial Condition Curve colors = lines(length(initial_conditions)); % Distinguishable color map for i = 1:length(initial_conditions) x0 = initial_conditions(i); % Numerically solve the differential equation [t_sol, x_sol] = ode45(f, t_span, x0); % Overlay the trajectory plot(t_sol, x_sol, 'LineWidth', 2, 'Color', colors(i, :)); end %% Step 3: Format the Visualization xlabel('Time (t)'); ylabel('State (x)'); title(\"Slope Field and Solutions for $x' = -x + S(x - \\theta + e(t))$\", 'Interpreter', 'latex'); xlim([t_span(1) - 0.05, t_span(2) + 0.05]); ylim([-0.1, 1.1]); grid on; hold off;   Slope Field and Solutions for $x' = -x + S(x - \\theta + e(t))$   Since the cell input function is periodic, some interesting things happen. From the graph, it appears that there is at least one oscillatory solution around the 50% activity level, which means that with an appropriate initial condition the activity level will oscillate with approximately half of the cells active and half inactive at any time . If the initial condition is too small, the activity level will die out and if it is too large it will approach a state where nearly 100% of the cells will be active.     Physics   We want to model the velocity of a skydiver falling from a plane. In free fall, Newton's second law can be used to write mass acceleration sum of forces. Since acceleration is the derivative of velocity, that is, , this results in the differential equation     where is the velocity in meters\/second, is the mass in kilograms of the falling skydiver, is the downward acceleration due to gravity, is the coefficient of friction due to air resistance, and is an exponent usually assumed to be equal to one.  Assuming and m\/s , the equation can be solved analytically and has solution     A man drops from a high flying plane and falls for 5 seconds before opening his parachute. With the parachute closed, sec .     Find the man's velocity when he opens his parachute (use the initial condition to find the value of the constant ).      After the chute opens, what must the value of be to get his terminal velocity down to 5 mph? (Use 1 m\/sec 2.237 mph.) Assume he has a very long way to fall.      Mathematics   Consider the one-parameter family of parabolas . The slope of a curve in this family is . From the equation for , we have that , so . This means that the curve in the orthogonal family will have slope at the point ; so these curves must satisfy the differential equation .     Show that the set of curves is a one-parameter family satisfying the differential equation in part (a).      Use MATLAB to sketch the curves for , and the curves for . If you make the scales on the and axes exactly the same, the c urves should intersect at right angles.      Engineering   The diagram below shows a circuit containing the elements mentioned in our in-class application; that is, a resistor with ohms, an inductor with inductance henry, and a generator producing a periodic electromotive force of volts.   A sample circuit      The current can be modeled by the equation . This equation is linear and the solution is        The current will approach a periodic steady state solution as . Give the equation for the steady state curve.      What initial value could you use to produce this curve as the solution to the IVP for this DE?      Ecology   A population of ants, initially containing 20 ants, is growing according to the population growth equation   with time measured in days.     If the carrying capacity of the area in which they live is 1000, how many ants will there be one week later?      If bug spray is used, and it decreases the intrinsic growth rate from 0.5 to 0.1, how many ants will you have one week later? Assume the carrying capacity remains unchanged at 1000 ants.      "
},
{
  "id": "sec-modeling-diff-eq-2",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#sec-modeling-diff-eq-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  To understand that first-order differential equations can be used to model various real-world phenomena.  To understand that slope fields -- collections of short arrows drawn tangent to solution curves -- can be used to visualize the solutions of first-order differential equations.  To understand that some first-order differential equations can be solved analytically, while others require numerical methods to approximate the solution.   "
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
  "id": "subsec-Ecology-2",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#subsec-Ecology-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic growth model carrying capacity "
},
{
  "id": "subsec-Ecology-4",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#subsec-Ecology-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intrinsic growth rate carrying capacity "
},
{
  "id": "exercises-modeling-1",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#exercises-modeling-1",
  "type": "Exercise",
  "number": "1.2.6.1",
  "title": "Physics.",
  "body": " Physics   We want to model the velocity of a skydiver falling from a plane. In free fall, Newton's second law can be used to write mass acceleration sum of forces. Since acceleration is the derivative of velocity, that is, , this results in the differential equation     where is the velocity in meters\/second, is the mass in kilograms of the falling skydiver, is the downward acceleration due to gravity, is the coefficient of friction due to air resistance, and is an exponent usually assumed to be equal to one.  Assuming and m\/s , the equation can be solved analytically and has solution     A man drops from a high flying plane and falls for 5 seconds before opening his parachute. With the parachute closed, sec .     Find the man's velocity when he opens his parachute (use the initial condition to find the value of the constant ).      After the chute opens, what must the value of be to get his terminal velocity down to 5 mph? (Use 1 m\/sec 2.237 mph.) Assume he has a very long way to fall.    "
},
{
  "id": "exercises-modeling-2",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#exercises-modeling-2",
  "type": "Exercise",
  "number": "1.2.6.2",
  "title": "Mathematics.",
  "body": " Mathematics   Consider the one-parameter family of parabolas . The slope of a curve in this family is . From the equation for , we have that , so . This means that the curve in the orthogonal family will have slope at the point ; so these curves must satisfy the differential equation .     Show that the set of curves is a one-parameter family satisfying the differential equation in part (a).      Use MATLAB to sketch the curves for , and the curves for . If you make the scales on the and axes exactly the same, the c urves should intersect at right angles.    "
},
{
  "id": "exercises-modeling-3",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#exercises-modeling-3",
  "type": "Exercise",
  "number": "1.2.6.3",
  "title": "Engineering.",
  "body": " Engineering   The diagram below shows a circuit containing the elements mentioned in our in-class application; that is, a resistor with ohms, an inductor with inductance henry, and a generator producing a periodic electromotive force of volts.   A sample circuit      The current can be modeled by the equation . This equation is linear and the solution is        The current will approach a periodic steady state solution as . Give the equation for the steady state curve.      What initial value could you use to produce this curve as the solution to the IVP for this DE?    "
},
{
  "id": "exercises-modeling-4",
  "level": "2",
  "url": "sec-modeling-diff-eq.html#exercises-modeling-4",
  "type": "Exercise",
  "number": "1.2.6.4",
  "title": "Ecology.",
  "body": " Ecology   A population of ants, initially containing 20 ants, is growing according to the population growth equation   with time measured in days.     If the carrying capacity of the area in which they live is 1000, how many ants will there be one week later?      If bug spray is used, and it decreases the intrinsic growth rate from 0.5 to 0.1, how many ants will you have one week later? Assume the carrying capacity remains unchanged at 1000 ants.    "
},
{
  "id": "sec-geom-analysis",
  "level": "1",
  "url": "sec-geom-analysis.html",
  "type": "Section",
  "number": "1.3",
  "title": "Geometric Analysis",
  "body": " Geometric Analysis    To understand that direction fields are a useful way of analyzing a differential equation from a geometric point of view, especially since not all differential equations can be solved analytically.  To understand that an autonomous equation is a differential equation of the form and that phase lines can be used to analyze autonomous differential equations.  To understand equilibrium solutions to a differential equation are those solutions given by for all . In particular, an equilibrium solution is either a sink , source , or node .     As we've mentioned previously, not all differential equations -- even first-order equations -- can be solved exactly. Our first goal is always to find a formula for . But when we can't, it's nice to have a backup plan. This is where the ability to sketch a graph of the solution, either by hand or with the help of a computer, can be a lifesaver.  If we view the differential equation as a formula for the slope of a tangent line to a solution curve, we can approximate the graph of a solution curve. For example, if we consider the equation , then a solution curve will have a slope of 2 at the point . We can use this information to obtain a geometric description of the solutions to the equation.    More About Direction (Slope) Fields  Any differential equation     can be viewed as a formula for the slope of a function . Geometrically, the equation tells us that at any point , the slope of a solution curve is given by . Suppose that our differential equation is defined on the rectangle in the -plane. Let be a solution curve for that passes through the point . Then the differential equation tells us the slope of this solution curve at . We can indicate this on the -plane by drawing a short line segment at the point with slope . Thus we can obtain a direction field or slope field for the differential equation. A solution curve must be tangent to its slope field at every point.  For example, consider the differential equation . The slope field for this equation is given in along with a few solution curves.   The slope field for    Although direction fields can be tedious to compute using pencil and paper, we can easily generate direction fields for any differential equation with the use of computer software. Most computer algebra systems, including MATLAB, have facilities for generating and graphing direction fields. For instance, the following MATLAB code will generate the slope field for . While we've already seen some code in the previous section that will generate solution curves, we will go over the commands to do that thoroughly at the end of this section.  % 1. Define the differential equation as an anonymous function f = @(x, y) y .^2 .\/2 - x; % 2. Set up the grid for the slope field x_range = 0:0.5:5; y_range = -5:1:10; [X, Y] = meshgrid(x_range, y_range); % Calculate the slopes (dx = 1, dy = f) dx = ones(size(X)); dy = f(X, Y); % Normalize vectors so all slope lines are the same length L = sqrt(dx.^2 + dy.^2); dx_norm = dx .\/ L; dy_norm = dy .\/ L; % 3. Plot the slope field figure; quiver(X, Y, dx_norm, dy_norm, 0.5, 'Color', 'blue'); hold on; % 4. Format the graph xlabel('x'); ylabel('y'); title('Slope Field for dy\/dx = y^2\/2 - x'); axis([x_range(1) x_range(end) y_range(1) y_range(end)]); grid on; hold off;   There are also several sites online where you can produce sketches of slope fields quickly and easily (such as the .)   Plotting Slope Fields   Use MATLAB or the Bluffton University website referenced above to sketch the requested slope fields                                         Autonomous Equations  We have seen that first-order differential equations can always be written in the form     However, if the function  only depends on and not on (or ), we have a special kind of differential equation.    A first-order differential equation is called autonomous if it can be written in the form       In particular, the rate of change of depends not on (or ), but only on 's current value.   The equation is autonomous.    The equation is autonomous.    The logistic growth equation is autonomous because there are no instances of the independent time variable on the right-hand side of the equation.   First-order autonomous equations are among the easiest to analyze; in fact, their solutions have fairly limited types of behavior. Suppose that and that for some real number . Then the constant function is a solution of the differential equation since both and are identically zero.    A constant function , such that is called an equilibrium solution of the autonomous differential equation .    Since the slopes only depend on , a slope field for an autonomous equation is completely determined once the slopes along any vertical line are plotted. In fact, if is defined and continuous for all , the behavior of the solutions of the equation can be determined from the slope lines along the -axis. This leads to the construction of what is called a phase line for the autonomous differential equation. (See .)   Slope field for    A phase line gives us a one-dimensional picture of our solutions' increase or decrease. To produce a phase line, we can use the same techniques we used back in first-semester calculus to draw the intervals of increase and decrease for a function .   To draw a phase line for the equation     Find all real numbers such that , and label these values on a vertical -axis. These points represent the equilibrium solutions. We assume first that the function has finitely many zeros; if not, a phase line can always be drawn using a finite interval on the -axis.    For each interval pick any value in the interval and determine whether is positive or negative. Draw an arrow on the axis, in the given interval, pointing up if is positive and pointing down if is negative. Note that if is a continuous function, it will have constant sign between any two zeros.      A solution with initial value satisfying is monotonically increasing if the arrow points up or monotonically decreasing if the arrow is pointing down. If satisfies the conditions of the Existence and Uniqueness Theorem, then the solution must remain bounded between the two equilibrium values, since they are solutions and solutions cannot intersect.   Drawing a Phase Line  We will draw a phase line for the autonomous equation . We first find the equilibrium solutions by setting the right-hand side of the equation to zero. This quickly yields the two solutions and . These are shown plotted on the phase line in .  These two points split the phase line into three intervals: and . All we need to do is examine one point in each interval in order to draw the arrows correctly on the phase line.  For the interval , we can pick, say, and then the right-hand side of the differential equation becomes     so we draw an upward pointing arrow on the phase line below . We interpret this as follows: suppose have the initial condition with our differential equation. The solution curve through this point must have a positive slope, but it can never cross the equilibrium solution . (Why not?) Therefore, it must increase monotonically and approach as a horizontal asymptote as .  For the interval , we can choose and quickly get that so we draw a downward pointing arrow on the interval . This means that a solution curve with must be monotonically decreasing and bounded between -2 and 1. Therefore it must approach -2 asymptotically as .  Lastly, for the interval , we can choose and obtain . This means that we draw an upward pointing arrow above 2 on the phase line, meaning that any solution curve with initial condition will increase monotonically. Whether it exists for all or has a vertical asymptote at some positive value of cannot be determined geometrically.   Phase Line for      The phase line contains almost all of the information needed to construct the graphs of solutions shown in . It does not contain information on how fast the curves approach their asymptotes, or where the curves have inflection points, however. This information, which does depend on , is lost in going to the phase line representation, but note that we did not need to solve the differential equation analytically in order to draw the phase line.   Slope field for       Draw a phase line for the autonomous first-order equation .    We set the right-hand side of the equation to 0 and solve: . So we put points on our phase line at 0 and at 1. This splits our line into three intervals: and .  On the interval , we can choose . When we substitute this into the right-hand side of our equation, we get     and we draw a downward pointing arrow below 0.  In the interval , there's no getting around fractions. So we choose the easiest one to work with: . This gives us:   We then draw an upward pointing arrow on the phase line between 0 and 1.  Lastly, on the interval , we can choose an integer again: . This leads to   So we draw a downward pointing arrow above 1 on the phase line.  The final product should resemble the following:         Stability of Equilibrium Solutions  We know that equilibrium solutions of autonomous equations are constant solutions; their graphs are horizontal lines in the plane. But what happens if our initial conditions are not on the equilibrium line, but just really close?  We can see in that if solutions start initially close enough to the equilibrium solution , they will tend toward it as . On the phase line ( ), we can see that the arrows on either side of point toward . An equilibrium solution of this type is called a sink and is said to be a stable equilibrium .  On the other hand, solutions starting close to all tend to move away from this solution as increases. The phase line has arrows both pointing away from 1. An equilibrium solution of this type is said to be a source and is called an unstable equilibrium .  It is possible to have an equilibrium point on the phase line where an arrow on one side points toward the equilibrium and an arrow on the other side points away. Such an equilibrium is called a node . It is semi-stable in the sense that if a solution starts on one side of the equilibrium, it will tend towards it and if it starts on the other side, it will move away as .   Drawing a phase line   Draw a phase line for the equation   and label each equilibrium point as a sink, source, or node.    The equilibrium solutions are the zeros of , namely 0, -1, and 3. These are plotted out in the phase line below.     We could certainly do the same analysis we did before, interval by interval, to get the arrows to point the correct way. Another way which we learned in first-semester calculus would be to graph and see where it is positive or negative. (See .)   Graph of the slope function    It is important to realize that this graph is not the graph of the solution curves . We only use this graph to determine whether the arrow between two equilibria points up or down. We can see that is positive between all pairs of equilibrium points except 0 and 3; therefore, all of the arrows point up except the one between 0 and 3.  Once the arrows are drawn, it is easy to see that -1 is a node, 0 is a sink, and 3 is a source. Some solutions of this equation are shown in .         Autonomous Equations and Phase Lines   For each of the differential equations below, draw the phase line and classify each equilibrium solution as a sink, a source, or a node.                                In each case comment on anything that you notice about the phase line and the equilibrium solutions.      Exercises   Plotting Direction Fields by Hand   For each of the differential equations in , plot the direction field on the integer coordinates of the rectangle and by drawing a short line of the appropriate slope.                                                Use MATLAB to plot the slope fields for the differential equations in .     Equilibrium Solutions and Phase Lines   Find the equilibrium solutions for each of the differential equations in . Draw the phase line for each equation and classify each equilibrium solution as a sink, a source, or a node.                                               Sketching Solutions by Hand   Each of the differential equations in has several initial conditions specified. Sketch the solution curves that satisfy the initial conditions. Sketch your solutions for each equation on the same pair of axes.                                               Phase Lines from Graphs of the Derivative   Consider the differential equation , where the graph of is given in . Draw the phase line for each equation and classify each equilibrium solution as a sink, a source, or a node.                Plotting Slope Fields with MATLAB   Plotting Slope Fields  As we've seen, a slope field for a differential equation is comprised of lots of arrows. An arrow at a point is drawn with slope . Computer algebra systems such as MATLAB or Octave are useful for drawing slope fields because they will draw tens or hundreds of arrows without complaint.  In weaponry, a group of arrows is called a quiver , and so MATLAB uses the quiver command to draw an entire set of arrows for a slope field. Let us plot the direction field for the differential equation .  % Define the differential equation function: y' = y^2\/2 - x f = @(x, y) (y.^2)\/2 - x; % 1. Create the grid for the slope field x_vec = 0:0.5:5; y_vec = -5:1:10; [X, Y] = meshgrid(x_vec, y_vec); % 2. Calculate slopes and normalize vectors for uniform arrow length S = f(X, Y); L = sqrt(1 + S.^2); U = 1 .\/ L; V = S .\/ L; % 3. Plot the slope field figure; quiver(X, Y, U, V, 0.4, 'Color', [0.5 0.5 0.5]); hold on; % 4. Polish the plot layout xlabel('x'); ylabel('y'); title(\"Slope Field and Solutions for y' = y^2\/2 - x\"); axis([0 5 -5 10]); grid on; hold off;   Let's discuss the MATLAB code. (We won't do this too often.) The first thing to know is that MATLAB deals mainly with lists of numbers. So in the first line, where we define the function f , we use the . before the exponent to tell MATLAB to take a list y and square each element of it.  Next, we make the lists of values x and y which will make up the coordinates where we will plot the arrows for the slope field. We have x go from 0 to 5 in increments of 0.5, and y go from -5 to 10 in increments of 1. The meshgrid command combines the x and y lists into a matrix of coordinates [X,Y] .  We then form a matrix S of the values of the slope functions at each value [X,Y] . Some of these numbers will be small; others will be large. This would mean the arrows in the slope field would be all different sizes. Therefore, we normalize the lengths of the arrows by computing their magnitudes L , then dividing the components of the slope by the magnitudes.  At last, we draw the slope field. The figure command opens up the graph window in MATLAB. (Always start drawing a graph with that command.) We then use the quiver command to draw the slope field. The command draws an arrow at the point (X,Y) of length U in the -direction and length V in the - direction. We then ask MATLAB to reduce each arrow to 0.4 of its computed length so that the arrows don't crash into each other. (Change that 0.4 to 0 to see what happens.) We then use the hold on so that we can add on to the graph. Without it, MATLAB would erase what we have already if we continue to use graphing commands.  We do the final polishing of the graph; that is, we make it look nice by adding in axis labels, a title, set the axes for the graph, and put in a background grid.    Plotting Solutions  Now let us find a numerical solution to the equation using the command ode45 . This involves 4th- and 5th-order Runge-Kutta methods and returns a numerical solution (a table of values). We can add the code for this into our previous program to produce the slope field along with a few solutions.  % Define the differential equation function: y' = y^2\/2 - x f = @(x, y) (y.^2)\/2 - x; % 1. Create the grid for the slope field x_vec = -3:0.5:5; y_vec = -5:1:10; [X, Y] = meshgrid(x_vec, y_vec); % 2. Calculate slopes and normalize vectors for uniform arrow length S = f(X, Y); L = sqrt(1 + S.^2); U = 1 .\/ L; V = S .\/ L; % 3. Plot the slope field figure; quiver(X, Y, U, V, 0.4, 'Color', [0.5 0.5 0.5]); hold on; % 4. Solve and plot curves for each initial condition init_conds = [-1\/4, 1\/2, 3\/2]; x_span = [0, 5]; % Forward integration span % Colors for each trajectory colors = ['r', 'g', 'b']; for i = 1:length(init_conds) y0 = init_conds(i); % Forward integration from x = 0 to x = 5 [xf, yf] = ode45(f, [0, 5], y0); % Backward integration from x = 0 to x = -3 (to show full curve) [xb, yb] = ode45(f, [0, -3], y0); % Combine and sort trajectories so they plot cleanly x_total = [flipud(xb); xf]; y_total = [flipud(yb); yf]; % Plot the trajectory line plot(x_total, y_total, colors(i), 'LineWidth', 2, ... 'DisplayName', sprintf('y(0) = %.1f', y0)); % Mark the initial condition point plot(0, y0, [colors(i) 'o'], 'MarkerFaceColor', colors(i), 'HandleVisibility', 'off'); end % 5. Polish the plot layout xlabel('x'); ylabel('y'); title(\"Slope Field and Solutions for y' = y^2\/2 - x\"); axis([-3 5 -5 10]); grid on; legend('Slope Field', 'Location', 'best'); hold off;   There are other commands to solve differential equations in MATLAB ( e.g. , dsolve ). See .   MATLAB Exercises    Suppose that the population of a trout pond can be accurately modeled by the logistic equation        Plot the direction field for this equation using MATLAB.      Plot the graphs of two or three representative solutions to this equation on the direction field.         In-Class Work on Phase Lines and Slope Fields     To understand how to draw a solution curve on a slope field given an initial condition.    Given an autonomous first-order differential equation, be able to sketch a phase line and label equilibrium solutions as a sink, source, or node.      If we have a slope field in hand for a differential equation, it is important to be able to draw a reasonable approximation to a solution curve that passes through a given point.    Given each direction field shown below, draw a solution curve that fulfills the given initial condition (that is, a solution curve that passes through the given point).                                                                              Draw a phase line for the given autonomous differential equation and label each equilibrium solution as a sink, source, or node.          "
},
{
  "id": "sec-geom-analysis-2",
  "level": "2",
  "url": "sec-geom-analysis.html#sec-geom-analysis-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  To understand that direction fields are a useful way of analyzing a differential equation from a geometric point of view, especially since not all differential equations can be solved analytically.  To understand that an autonomous equation is a differential equation of the form and that phase lines can be used to analyze autonomous differential equations.  To understand equilibrium solutions to a differential equation are those solutions given by for all . In particular, an equilibrium solution is either a sink , source , or node .   "
},
{
  "id": "subsec-More-About-Direction-Fields-4",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-More-About-Direction-Fields-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direction field slope field "
},
{
  "id": "fig-slope-field-3",
  "level": "2",
  "url": "sec-geom-analysis.html#fig-slope-field-3",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " The slope field for   "
},
{
  "id": "subsec-More-About-Direction-Fields-11",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-More-About-Direction-Fields-11",
  "type": "Activity",
  "number": "1.3.2",
  "title": "Plotting Slope Fields.",
  "body": " Plotting Slope Fields   Use MATLAB or the Bluffton University website referenced above to sketch the requested slope fields                                      "
},
{
  "id": "def-autonomous-equation",
  "level": "2",
  "url": "sec-geom-analysis.html#def-autonomous-equation",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  A first-order differential equation is called autonomous if it can be written in the form      "
},
{
  "id": "subsec-autonomous-equations-7",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-autonomous-equations-7",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": " The equation is autonomous.  "
},
{
  "id": "subsec-autonomous-equations-8",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-autonomous-equations-8",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": " The equation is autonomous.  "
},
{
  "id": "subsec-autonomous-equations-9",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-autonomous-equations-9",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": " The logistic growth equation is autonomous because there are no instances of the independent time variable on the right-hand side of the equation.  "
},
{
  "id": "def-equilibrium-solution",
  "level": "2",
  "url": "sec-geom-analysis.html#def-equilibrium-solution",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  A constant function , such that is called an equilibrium solution of the autonomous differential equation .   "
},
{
  "id": "subsec-autonomous-equations-12",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-autonomous-equations-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phase line "
},
{
  "id": "fig-autonomous-field",
  "level": "2",
  "url": "sec-geom-analysis.html#fig-autonomous-field",
  "type": "Figure",
  "number": "1.3.8",
  "title": "",
  "body": " Slope field for   "
},
{
  "id": "subsec-autonomous-equations-15",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-autonomous-equations-15",
  "type": "Note",
  "number": "1.3.9",
  "title": "To draw a phase line for the equation <span class=\"process-math\">\\(y'=F(y)\\)<\/span>.",
  "body": " To draw a phase line for the equation     Find all real numbers such that , and label these values on a vertical -axis. These points represent the equilibrium solutions. We assume first that the function has finitely many zeros; if not, a phase line can always be drawn using a finite interval on the -axis.    For each interval pick any value in the interval and determine whether is positive or negative. Draw an arrow on the axis, in the given interval, pointing up if is positive and pointing down if is negative. Note that if is a continuous function, it will have constant sign between any two zeros.     "
},
{
  "id": "subsec-autonomous-equations-17",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-autonomous-equations-17",
  "type": "Example",
  "number": "1.3.10",
  "title": "Drawing a Phase Line.",
  "body": " Drawing a Phase Line  We will draw a phase line for the autonomous equation . We first find the equilibrium solutions by setting the right-hand side of the equation to zero. This quickly yields the two solutions and . These are shown plotted on the phase line in .  These two points split the phase line into three intervals: and . All we need to do is examine one point in each interval in order to draw the arrows correctly on the phase line.  For the interval , we can pick, say, and then the right-hand side of the differential equation becomes     so we draw an upward pointing arrow on the phase line below . We interpret this as follows: suppose have the initial condition with our differential equation. The solution curve through this point must have a positive slope, but it can never cross the equilibrium solution . (Why not?) Therefore, it must increase monotonically and approach as a horizontal asymptote as .  For the interval , we can choose and quickly get that so we draw a downward pointing arrow on the interval . This means that a solution curve with must be monotonically decreasing and bounded between -2 and 1. Therefore it must approach -2 asymptotically as .  Lastly, for the interval , we can choose and obtain . This means that we draw an upward pointing arrow above 2 on the phase line, meaning that any solution curve with initial condition will increase monotonically. Whether it exists for all or has a vertical asymptote at some positive value of cannot be determined geometrically.   Phase Line for      The phase line contains almost all of the information needed to construct the graphs of solutions shown in . It does not contain information on how fast the curves approach their asymptotes, or where the curves have inflection points, however. This information, which does depend on , is lost in going to the phase line representation, but note that we did not need to solve the differential equation analytically in order to draw the phase line.   Slope field for    "
},
{
  "id": "subsec-autonomous-equations-18",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-autonomous-equations-18",
  "type": "Checkpoint",
  "number": "1.3.13",
  "title": "",
  "body": "  Draw a phase line for the autonomous first-order equation .    We set the right-hand side of the equation to 0 and solve: . So we put points on our phase line at 0 and at 1. This splits our line into three intervals: and .  On the interval , we can choose . When we substitute this into the right-hand side of our equation, we get     and we draw a downward pointing arrow below 0.  In the interval , there's no getting around fractions. So we choose the easiest one to work with: . This gives us:   We then draw an upward pointing arrow on the phase line between 0 and 1.  Lastly, on the interval , we can choose an integer again: . This leads to   So we draw a downward pointing arrow above 1 on the phase line.  The final product should resemble the following:      "
},
{
  "id": "subsec-Stability-of-Equilibrium-Solutions-3",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-Stability-of-Equilibrium-Solutions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sink stable equilibrium "
},
{
  "id": "subsec-Stability-of-Equilibrium-Solutions-4",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-Stability-of-Equilibrium-Solutions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "source unstable equilibrium "
},
{
  "id": "subsec-Stability-of-Equilibrium-Solutions-5",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-Stability-of-Equilibrium-Solutions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "node semi-stable "
},
{
  "id": "subsec-Stability-of-Equilibrium-Solutions-6",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-Stability-of-Equilibrium-Solutions-6",
  "type": "Example",
  "number": "1.3.14",
  "title": "Drawing a phase line.",
  "body": " Drawing a phase line   Draw a phase line for the equation   and label each equilibrium point as a sink, source, or node.    The equilibrium solutions are the zeros of , namely 0, -1, and 3. These are plotted out in the phase line below.     We could certainly do the same analysis we did before, interval by interval, to get the arrows to point the correct way. Another way which we learned in first-semester calculus would be to graph and see where it is positive or negative. (See .)   Graph of the slope function    It is important to realize that this graph is not the graph of the solution curves . We only use this graph to determine whether the arrow between two equilibria points up or down. We can see that is positive between all pairs of equilibrium points except 0 and 3; therefore, all of the arrows point up except the one between 0 and 3.  Once the arrows are drawn, it is easy to see that -1 is a node, 0 is a sink, and 3 is a source. Some solutions of this equation are shown in .       "
},
{
  "id": "subsec-Stability-of-Equilibrium-Solutions-7",
  "level": "2",
  "url": "sec-geom-analysis.html#subsec-Stability-of-Equilibrium-Solutions-7",
  "type": "Activity",
  "number": "1.3.17",
  "title": "Autonomous Equations and Phase Lines.",
  "body": " Autonomous Equations and Phase Lines   For each of the differential equations below, draw the phase line and classify each equilibrium solution as a sink, a source, or a node.                                In each case comment on anything that you notice about the phase line and the equilibrium solutions.   "
},
{
  "id": "plot-dir-fields-by-hand-3",
  "level": "2",
  "url": "sec-geom-analysis.html#plot-dir-fields-by-hand-3",
  "type": "Exercise",
  "number": "1.3.4.1",
  "title": "",
  "body": "      "
},
{
  "id": "plot-dir-fields-by-hand-4",
  "level": "2",
  "url": "sec-geom-analysis.html#plot-dir-fields-by-hand-4",
  "type": "Exercise",
  "number": "1.3.4.2",
  "title": "",
  "body": "      "
},
{
  "id": "plot-dir-fields-by-hand-5",
  "level": "2",
  "url": "sec-geom-analysis.html#plot-dir-fields-by-hand-5",
  "type": "Exercise",
  "number": "1.3.4.3",
  "title": "",
  "body": "      "
},
{
  "id": "plot-dir-fields-by-hand-6",
  "level": "2",
  "url": "sec-geom-analysis.html#plot-dir-fields-by-hand-6",
  "type": "Exercise",
  "number": "1.3.4.4",
  "title": "",
  "body": "      "
},
{
  "id": "plot-dir-fields-by-hand-7",
  "level": "2",
  "url": "sec-geom-analysis.html#plot-dir-fields-by-hand-7",
  "type": "Exercise",
  "number": "1.3.4.5",
  "title": "",
  "body": "      "
},
{
  "id": "plot-dir-fields-by-hand-8",
  "level": "2",
  "url": "sec-geom-analysis.html#plot-dir-fields-by-hand-8",
  "type": "Exercise",
  "number": "1.3.4.6",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-geom-analysis-3",
  "level": "2",
  "url": "sec-geom-analysis.html#exercises-geom-analysis-3",
  "type": "Exercise",
  "number": "1.3.4.7",
  "title": "",
  "body": "  Use MATLAB to plot the slope fields for the differential equations in .   "
},
{
  "id": "equil-solns-phase-lines-3",
  "level": "2",
  "url": "sec-geom-analysis.html#equil-solns-phase-lines-3",
  "type": "Exercise",
  "number": "1.3.4.8",
  "title": "",
  "body": "      "
},
{
  "id": "equil-solns-phase-lines-4",
  "level": "2",
  "url": "sec-geom-analysis.html#equil-solns-phase-lines-4",
  "type": "Exercise",
  "number": "1.3.4.9",
  "title": "",
  "body": "      "
},
{
  "id": "equil-solns-phase-lines-5",
  "level": "2",
  "url": "sec-geom-analysis.html#equil-solns-phase-lines-5",
  "type": "Exercise",
  "number": "1.3.4.10",
  "title": "",
  "body": "      "
},
{
  "id": "equil-solns-phase-lines-6",
  "level": "2",
  "url": "sec-geom-analysis.html#equil-solns-phase-lines-6",
  "type": "Exercise",
  "number": "1.3.4.11",
  "title": "",
  "body": "      "
},
{
  "id": "equil-solns-phase-lines-7",
  "level": "2",
  "url": "sec-geom-analysis.html#equil-solns-phase-lines-7",
  "type": "Exercise",
  "number": "1.3.4.12",
  "title": "",
  "body": "      "
},
{
  "id": "equil-solns-phase-lines-8",
  "level": "2",
  "url": "sec-geom-analysis.html#equil-solns-phase-lines-8",
  "type": "Exercise",
  "number": "1.3.4.13",
  "title": "",
  "body": "      "
},
{
  "id": "sketch-solns-hand-3",
  "level": "2",
  "url": "sec-geom-analysis.html#sketch-solns-hand-3",
  "type": "Exercise",
  "number": "1.3.4.14",
  "title": "",
  "body": "      "
},
{
  "id": "sketch-solns-hand-4",
  "level": "2",
  "url": "sec-geom-analysis.html#sketch-solns-hand-4",
  "type": "Exercise",
  "number": "1.3.4.15",
  "title": "",
  "body": "      "
},
{
  "id": "sketch-solns-hand-5",
  "level": "2",
  "url": "sec-geom-analysis.html#sketch-solns-hand-5",
  "type": "Exercise",
  "number": "1.3.4.16",
  "title": "",
  "body": "      "
},
{
  "id": "sketch-solns-hand-6",
  "level": "2",
  "url": "sec-geom-analysis.html#sketch-solns-hand-6",
  "type": "Exercise",
  "number": "1.3.4.17",
  "title": "",
  "body": "      "
},
{
  "id": "sketch-solns-hand-7",
  "level": "2",
  "url": "sec-geom-analysis.html#sketch-solns-hand-7",
  "type": "Exercise",
  "number": "1.3.4.18",
  "title": "",
  "body": "      "
},
{
  "id": "sketch-solns-hand-8",
  "level": "2",
  "url": "sec-geom-analysis.html#sketch-solns-hand-8",
  "type": "Exercise",
  "number": "1.3.4.19",
  "title": "",
  "body": "      "
},
{
  "id": "phase-line-deriv-graph-3",
  "level": "2",
  "url": "sec-geom-analysis.html#phase-line-deriv-graph-3",
  "type": "Exercise",
  "number": "1.3.4.20",
  "title": "",
  "body": "    "
},
{
  "id": "phase-line-deriv-graph-4",
  "level": "2",
  "url": "sec-geom-analysis.html#phase-line-deriv-graph-4",
  "type": "Exercise",
  "number": "1.3.4.21",
  "title": "",
  "body": "    "
},
{
  "id": "subsubsec-Plotting-Slope-Fields-3",
  "level": "2",
  "url": "sec-geom-analysis.html#subsubsec-Plotting-Slope-Fields-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quiver "
},
{
  "id": "subsubsec-Plotting-Solutions-6-2",
  "level": "2",
  "url": "sec-geom-analysis.html#subsubsec-Plotting-Solutions-6-2",
  "type": "Exercise",
  "number": "1.3.5.2.1",
  "title": "",
  "body": "  Suppose that the population of a trout pond can be accurately modeled by the logistic equation        Plot the direction field for this equation using MATLAB.      Plot the graphs of two or three representative solutions to this equation on the direction field.    "
},
{
  "id": "ws-slope-fields-2",
  "level": "2",
  "url": "sec-geom-analysis.html#ws-slope-fields-2",
  "type": "Objectives",
  "number": "1.3.6",
  "title": "",
  "body": "   To understand how to draw a solution curve on a slope field given an initial condition.    Given an autonomous first-order differential equation, be able to sketch a phase line and label equilibrium solutions as a sink, source, or node.    "
},
{
  "id": "ws-slope-fields-4-2",
  "level": "2",
  "url": "sec-geom-analysis.html#ws-slope-fields-4-2",
  "type": "Worksheet Exercise",
  "number": "1.3.6.1",
  "title": "",
  "body": "                                  "
},
{
  "id": "ws-slope-fields-5-1",
  "level": "2",
  "url": "sec-geom-analysis.html#ws-slope-fields-5-1",
  "type": "Worksheet Exercise",
  "number": "1.3.6.2",
  "title": "",
  "body": "                                  "
},
{
  "id": "ws-slope-fields-6-2",
  "level": "2",
  "url": "sec-geom-analysis.html#ws-slope-fields-6-2",
  "type": "Worksheet Exercise",
  "number": "1.3.6.3",
  "title": "",
  "body": "  "
},
{
  "id": "ws-slope-fields-6-3",
  "level": "2",
  "url": "sec-geom-analysis.html#ws-slope-fields-6-3",
  "type": "Worksheet Exercise",
  "number": "1.3.6.4",
  "title": "",
  "body": "  "
},
{
  "id": "sec-separable-eq",
  "level": "1",
  "url": "sec-separable-eq.html",
  "type": "Section",
  "number": "1.4",
  "title": "Separable Differential Equations",
  "body": " Separable Differential Equations     To recall that a first-order differential equation is one that can be written in the form       To understand that a differential equation is separable if it can be written in the form     and by rewriting the equation in the form     the equation can be solved by integrating both sides.      We are now in a place where we can begin actually solving some first-order linear differential equations. That is, we're going to begin to learn how to find an actual formula for a solution to the equation, not just approximate it. We also will look at when we can do this because, as we've noted before, we cannot always.  We've seen that we can always write a first-order linear differential equation in the form     for some function . There are a couple of special cases of this format where we can actually get a solution.     The right-hand side function ; that is, there's only 's on the right-hand side, no 's. Then we can multiply both sides of the equation by We continue the custom from first-semester calculus that is not a fraction, though we treat it like one from then on. to get     We then integrate both sides to get     or , where is any antiderivative of .    The right-hand side function is ; that is, there's only 's on the right-hand side, no 's. In this case, we have an autonomous equation and we could use the methods of the previous section (phase lines, slope fields) to find good approximations to a solution.     The issue comes when we do have both 's and 's on that right-hand side. The good news is that there are instances where we can fully solve the differential equation. We will explore these instances here and in the next few sections.    Separable Differential Equations  If we can write the right-hand side function as the product of a function of just times a function of just , then our differential equation often can be solved.    A first-order linear differential equation is called separable if it can be written in the form        The equation is separable because we can write it as with and .    The equation is not separable because it cannot be factored into the product of a function of just and a function of just .    The equation is separable with and . This equation is also autonomous. In fact, all autonomous equations are also separable .    The equation is separable. (It falls into our first special case above. Any equation where the right-hand side only has one variable is separable. )  We can in fact solve this particular equation:   Whether we can solve this type of differential equation (or an autonomous equation) depends on the integrability of the right-hand side. For instance, the differential equation is separable. However, has no antiderivative. If we had an initial-value problem that involved this equation, we would have to approximate the integral of using numerical methods.   When we have a separable equation, we can mostly solve it using the separate and integrate method. We first separate the variables -- all the terms with 's in them go to the left side, and all the terms with 's in them go the the right side. We then integrate both sides (assuming we can do so) which leads to an implicit solution of the equation. That is, we obtain an equation which gives the relationship between and . In many cases, we can solve this equation for . If we can, we have an explicit solution , an actual formula for the dependent variable in terms of the independent variable . Obtaining an explicit solution is always the goal, though it's not always possible.   Suppose that we wish to solve the differential equation . This equation is separable with and . (It doesn't matter where we put the minus sign since we can move it as needed.) We first rewrite the left-hand side in Leibniz notation:     We then separate the variables, moving the pieces to the left and the pieces to the right, remembering that the differentials and  must be in the numerators of any fractions that result . Thus we divide both sides by and multiply both sides by .   We rewrite this in the forms: We can now integrate both sides with respect to the separate variables to get This last equation is an implicit solution to our differential equation. Notice that we put a single constant of integration on the right-hand side . In this case, we can get an explicit solution by taking the reciprocal of both sides.    Note in the last step that we must take the reciprocal of the entire right- hand side at once. The answer is not  . Not at all.   The MATLAB commands to solve this equation are below.   Is MATLAB wrong? Or is its answer an alternate form for what we computed?    Suppose we wish to solve the differential equation . This equation is separable with and . Following the method of the previous example, we will separate the variables and then integrate both sides.   This leads to the implicit solution We can actually solve this to get an explicit formula for . We first take to both sides to get Since is constant and is constant, is constant. To make things a little easier to read, let's set . Then we have where can be any real number except 0. (Why?) However, we note that if were 0, our solution would become which is also a solution of the original differential equation. So we go ahead and allow , and this means that our complete solution is   The MATLAB commands to solve the equation are below.    What happened toward the end of the last example with the allowable values of ? When we separated the variables, we divided by . Since we're not allowed to divide by 0, this implies that is not allowed to be . In other words, we dropped as a possible solution. However, we are duty bound before declaring victory over a problem to check thrown away solutions in the original differential equation to make sure we have a complete answer. This is something you should always do as you finish up solving a differential equation .    In-Class Work on Separable Equations     To be able to determine whether a given first-order differential equation is separable or not.    To be able to solve separable first-order equations by separating variables and integrating.      Methods of solution for differential equations are very different for the various types of equations we will encounter. It is therefore important that we're able to recognize, for instance, when a differential equation is separable or not.    Determine whether the following differential equations are separable or not.                Rewrite the following separable equations in the form and then solve them using the method of separation of variables. (That is, get all the 's on the left, all the 's on the right, and then integrate both sides.)               Initial-Value Problems  We can solve separable initial-value problems -- separable differential equations paired with an initial condition -- using the same method. In the end, the initial condition allows us to fill in the value of the arbitrary constant.   Suppose we wish to solve the initial-value problem We first separate the variables and write We then integrate both sides to get Using the initial condition (which we read as when , ), we can determine the value of . Since is positive, we choose the positive square root above. Thus the particular solution is   The MATLAB commands for solving this differential equation are below.    If we ask MATLAB to solve a differential equation it cannot solve analytically, it will return an error message. For instance, MATLAB cannot solve the initial-value problem     Consider the initial-value problem This equation is separable and so we first separate the variables. We can now integrate both sides of this equation and obtain where equals . The initial condition tells us that when , . This gives us Therefore, Notice that this solution does not make sense for all values of . In fact, the solution is defined only for , if we require our solution to be continuous. Let's see what MATLAB has to say on the matter.   MATLAB does return a solution even if it looks a bit different than the one that we arrived at above. Notice that we have an imaginary term in our solution, where . We will examine the role of complex numbers and how useful they are in the study of ordinary differential equations in a later chapter, but for the moment complex numbers will just muddy the situation.    Logistic Growth  The logistic growth model we saw in qualifies as a separable equation (as well as a homogeneous one). Here's an initial-value problem we can solve using our separate and integrate method: Our starting population is 100 and the carrying capacity for the environment we are modeling is 1000. We first separate the variables. Since is the dependent variable, we get all the 's on the left-hand side, and all the 's (the independent variables) on the right-hand side. To compute the integral on the left, we can use partial fractions to write Equating the numerators of the first and last fractions there (which have the same denominators), we arrive at Grouping by powers of on each side of the equation, we get the system of equations Thus Coming back to our integrals, we now have To solve for , we exponentiate both sides and use properties of exponentials and logarithms to write where . Since , we can remove the absolute values on the left-hand side. where . If we substitute in our initial condition , we find that     Solving Separable Differential Equations   Solve each of the following differential equations using the separation of variables technique.                                         Newton's Law of Cooling  Separable equations arise in a wide range of application problems. One does not have to watch too many crime dramas to realize that the time of death of a murder victim is an important question in many criminal investigations. How does a forensic scientist or a medical examiner determine the time of death? Human beings have a temperature of F. If the surrounding temperature is cooler, then the body will cool down after death. Eventually, the temperature of the body will match the temperature of the environment. We should not expect the body to cool at a constant rate either. Think of how a hot cup of coffee or tea cools. The liquid will cool quite quickly during the first few minutes but will remain relatively warm for quite a long period.  The answer to our forensic question can be found by using Newton's law of cooling , which tells us that the rate of change of the temperature of an object is proportional to the difference between the temperature of the object and the temperature of the surrounding medium. Newton's law of cooling can be easily stated as a differential equation, where is the temperature of the object, is the temperature of the surrounding medium, and is the proportionality constant.  Suppose that the temperature of the surrounding environment is F, and we know from experience that a body under these conditions cools off approximately F during the first hour after death. In order to determine a formula for the time of death, we must solve the initial-value problem where . If we rewrite the equation as we see that the equation is separable. Integrating both sides, we obtain . Since we are assuming that , we can remove the absolute values and write Letting , the solution becomes The initial condition leads to . Thus, Since we can solve for . and The graph of the temperature seems appropriate to our model .   Newton's law of cooling    Let's solve our differential equation using MATLAB.   We can than use MATLAB to graph the solution. Here is the code we used to generate .  % Define the time range from 0 to 50 with 1000 data points t = linspace(0, 50, 1000); % Calculate the function values T = 28.6 * exp(-0.0725 * t) + 70; % Create the plot figure; plot(t, T, 'b-', 'LineWidth', 2); % Add labels, title, and grid xlabel('Time ($t$)', 'Interpreter','latex'); ylabel('$T(t)$','Interpreter','latex'); title('Graph of T(t) = 28.6 \\cdot e^{-0.0725 \\cdot t} + 70'); grid on;   Coffee Temperature   The brewing temperature of the water used is very important. It should be between F and F. The closer to F the better. Boiling water ( F) should never be used, as it will burn the coffee. Water that is less than F will not extract properly. On the other hand, coffee that has a temperature of F is too hot to drink. Google the famous MacDonald's lawsuit. Coffee is best when it is served at a temperature of F to F (the Goldilocks range).     Suppose coffee is initially brewed at F. If room temperature is F, set up an initial value problem to model the temperature of the coffee at time , where is the time in minutes after brewing has finished.      Solve the initial value problem from      If the temperature of the coffee drops from F to F in the first two minutes after brewing, how long before the coffee reaches a temperature of F?       Mixing Problems  There is a large class of problems in modeling known as mixing problems mixing problems . These problems refer to situations where two or more substances are mixed together in a container or containers. For example, we might wish to model how chemicals are mixed together in a refinery, how pollutants are mixed together in a pond or a lake, how ingredients are mixed together when brewing beer, or even how various greenhouse gases mix together across different layers of the atmosphere.   Suppose that we have a large tank containing 1000 gallons of pure water and that water containing 0.5 pounds of salt per gallon flows into the tank at a rate of 10 gallons per minute. If the tank is also draining at a rate of 10 gallons per minute, the water level in the tank will remain constant. We will assume that the water in the tank is constantly stirred so that the mixture of salt and water is uniform in the tank.  We can model the amount of salt in the tank using differential equations. If is the amount of salt in the tank at time , then the rate at which the salt is changing in the tank is the difference between the rate at which salt is flowing into the tank and the rate at which it is leaving the tank, or Of course, the salt flows into the tank at the rate of pounds of salt per minute. However, the rate at which the salt leaves the tank depends on , the amount salt in the tank at time . At time , there is pounds of salt in one gallon. Therefore, salt flows out of the tank at a rate of pounds per minute. Equation now becomes This equation is separable, Integrating both sides of the equation, we have or Consequently, where . From our initial condition, we can quickly determine that and models the amount of salt in the tank at time . Notice that as , as expected.    A Brewery Problem   The vast majority of beers from around the world have alcohol contents of 4 to 6 percent alcohol by volume (for example, Heineken Lager Beer has a 5 percent alcohol content). Suppose a local brewery has produced two beers with different alcohol contents, one 4 percent and one 7 percent. The master brewer would like to add some of the 7 percent beer to the 4 percent beer to obtain a beer with 5 percent alcohol.     A vat contains 500 gallons of 4% alcohol (by volume). Beer with 7% alcohol is pumped into the tank at a rate of 5 gallons per minute. Beer is also pumped out of the vat at a rate of 5 gallons per minute, so there is always 500 gallons in the tank. Set up an initial value problem to model the percentage of alcohol in the vat at time , where is the elapsed time in minutes.      Solve the initial value problem from      What is the percentage of alcohol in the vat after one hour?      At what time will the beer reach 5% alcohol?       A Retirement Model  Differential equations have many applications in economics and finance. For example, Dr. P., a college professor, wisely started saving for his retirement as soon as he entered the workforce, and he now has $500,000 in a retirement account earning an interest of 5% compounded continuously. The initial value problem, provides a nice model of Dr. P.'s investment, where is the amount in thousands of dollars in the fund at time . The solution to our initial value problem is If Dr. P. plans to retire in 10 years, he can expect a nest egg of or about $824,360.  Of course, Dr. P. still plans to make contributions to his retirement fund during his next ten years of employment. His annual contribution will be $5,000, which his employer will generously match. If we assume that these contributions will spread out evenly over the course of the year, we can incorporate this information into our original initial value problem, This differential equation is separable, so we have Integrating both sides of this equation, we have where is an arbitrary constant. Since , we have This last equation is equivalent to If we let and solve for , we obtain Using our initial condition, we have . Thus, the solution that we seek is Dr. P.'s nest egg is now or about $954,105.  Once Dr. P. retires, he will need to begin withdrawing money from his account. He estimates that he will need to withdraw $60,000 a year for living expenses if he wishes to travel and enjoy his golden years. Of course, whatever remains in his account at any given time will still collect interest. We describe Dr. P.'s retirement situation with the initial value problem, If , then Hence, the rate of withdrawal exceeds the rate at which Dr. P.'s account is earning interest. Eventually, Dr. P.'s retirement fund will disappear. This may pose a problem, if Dr. P. plans to retire early and live a long life.  Again, the differential equation is separable, and we have Integrating both sides of this equation yields Since , and Consequently, or where . Now, we can apply our initial condition to determine that . Therefore, describes how much money Dr. P. has after he retires ( ).  If Dr. P. wants to know how long his retirement fund will last, he must solve the equation In this case, This means that if Dr. P. retires in 10 years at the early age of 55, he can expect his retirement to last into his mid-90s.   A Sports Contract   In December 2023, Shohei Ohtani announced he was signing with the Los Angeles Dodgers. The contract terms were staggering: 10 years and $700 million. To date, this was the largest contract in sports history, eclipsing Lionel Messi's $673 million contract with FC Barcelona. Ohtani will receive $20 million of his $700 million contract with the Los Angeles Dodgers over the next 10 years or $2 million each year. The $680 million remaining will be paid out at $68 million a year over the following 10 years. Clearly, the Los Angeles Dodgers do not have to pay out the entire $700 million at the signing of the contract.     How much is Ohtani's contract worth in December 2023? You may assume that the interest rate over the next 20 years will be 6% (adjusted for inflation).       What Can Go Wrong  Not all separable first-order equations can be solved analytically. Even if we can, it may be impossible to find an explicit solution.   No Explicit Solution  Consider the equation This equation can be rewritten in the form (Use partial fractions.) Integrating both sides of the equation, we have However, we have no method of solving this last equation explicitly for .    Un-integrable functions  Consider the equation This equation is separable since we can rewrite it in the form Although the Fundamental Theorem of Calculus guarantees that every continuous function has an antiderivative, we cannot find an antiderivative for the function in terms of elementary functions. Thus, we are forced to write our solution as     Non-linear equations  Even if we have a separable differential equation, we are not guaranteed a unique solution. Consider the initial value problem with and . Separating the variables, Thus, or If , the initial condition is satisfied and is a solution for . However, we can find at least two additional solutions for : This does not violate because this differential equation is non-linear.    Different Intervals, Different Solutions  Suppose that with . Separating the variables, we see that Using the initial condition to solve for , we get This function has a vertical asymptote at . Because we have an initial condition at 0, by , this solution is valid on all of .  On the other hand, suppose instead that . Then the solution is and this solution is valid on .     Exercises   Finding General Solutions   Find the general solution for each equation in .                                                               Solving Initial Value Problems   Solve the initial value problems in .      ,        ,        ,        ,       ,      ,      ,      ,      ,      ,      Use MATLAB to solve the initial value problems in .    Homogeneous Equations   A first-order differential equation, , is homogeneous if .  Show that the equation is homogeneous.  Let and show that the equation in part (a) can be written as Use the fact that this new equation is separable to solve for .  Show that any homogeneous equation can be transformed into a separable differential equation by making the substitution .  A function is said to homogeneous of degree if for . Show that differential equation where and are both homogeneous of degree , can be transformed into a separable differential equation using the substitution .  Solve the differential equation  Solve the differential equation       Mr. Ratchett, an elderly American, was found murdered in his train compartment on the Orient Express at 7 AM. When his body was discovered, the famous detective Hercule Poirot noted that Ratchett had a body temperature of C. The body had cooled to a temperature of C one hour later. If the normal temperature of a human being is C and the air temperature in the train is C , estimate the time of Ratchett's death using Newton's Law of Cooling.      You are starting a new position, and your employer has a generous retirement plan. If you put $500 a month into a 401(k) plan, your employer will match your contributions.  Assuming that you are 25 years old and plan to retire at age 65, how large can you expect your 401(k) pension to be when you retire? Assume that your 401(k) plan will collect interest at a rate of 5%.  If you begin withdrawing $60,000 every year at age 65, how long will your retirement fund last?        MATLAB -- Quick Start Guide to Solving Ordinary Differential Equations  MATLAB (and Octave) has powerful algorithms for finding exact and numerical solutions of differential equations. In addition, we can plot solutions and direction fields. Although some differential equations have an exact solution and can be solved using analytic techniques with calculus, many differential equations can only be solved using numerical techniques. This should not be too surprising if we consider how we solve polynomials. It is quite easy to find the roots of any equation of the form by either factoring or using the quadratic equation, but solving an equation such as is a much more difficult problem. Unlike the situation for quadratic equations, there does not exist a general formula for solving seventh degree equations. We can even encounter difficulties when using a numerical method such as the Newton-Raphson algorithm.  In general, MATLAB needs three things to solve a differential equation.   An abstract function    A differential equation    A MATLAB command to solve the equation.     Suppose we wish to solve the equation We can use the following sequence of MATLAB commands.   The first command loads in the ability for Octave to deal with abstract functions (but you should comment it out if you copy and paste the code into MATLAB). The second command defines the abstract function. The third describes the actual differential equation. Finally, we use the MATLAB command dsolve to find the actual solution.   We can also specify an initial condition for our differential equation, say, .    "
},
{
  "id": "sec-separable-eq-2",
  "level": "2",
  "url": "sec-separable-eq.html#sec-separable-eq-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "   To recall that a first-order differential equation is one that can be written in the form       To understand that a differential equation is separable if it can be written in the form     and by rewriting the equation in the form     the equation can be solved by integrating both sides.    "
},
{
  "id": "def-separable-diff-eq",
  "level": "2",
  "url": "sec-separable-eq.html#def-separable-diff-eq",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  A first-order linear differential equation is called separable if it can be written in the form      "
},
{
  "id": "subsec-separable-diff-eq-4",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-separable-diff-eq-4",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": " The equation is separable because we can write it as with and .  "
},
{
  "id": "subsec-separable-diff-eq-5",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-separable-diff-eq-5",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": " The equation is not separable because it cannot be factored into the product of a function of just and a function of just .  "
},
{
  "id": "subsec-separable-diff-eq-6",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-separable-diff-eq-6",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": " The equation is separable with and . This equation is also autonomous. In fact, all autonomous equations are also separable .  "
},
{
  "id": "subsec-separable-diff-eq-7",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-separable-diff-eq-7",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": " The equation is separable. (It falls into our first special case above. Any equation where the right-hand side only has one variable is separable. )  We can in fact solve this particular equation:   Whether we can solve this type of differential equation (or an autonomous equation) depends on the integrability of the right-hand side. For instance, the differential equation is separable. However, has no antiderivative. If we had an initial-value problem that involved this equation, we would have to approximate the integral of using numerical methods.  "
},
{
  "id": "subsec-separable-diff-eq-8",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-separable-diff-eq-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separate and integrate implicit solution explicit solution "
},
{
  "id": "subsec-separable-diff-eq-9",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-separable-diff-eq-9",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": " Suppose that we wish to solve the differential equation . This equation is separable with and . (It doesn't matter where we put the minus sign since we can move it as needed.) We first rewrite the left-hand side in Leibniz notation:     We then separate the variables, moving the pieces to the left and the pieces to the right, remembering that the differentials and  must be in the numerators of any fractions that result . Thus we divide both sides by and multiply both sides by .   We rewrite this in the forms: We can now integrate both sides with respect to the separate variables to get This last equation is an implicit solution to our differential equation. Notice that we put a single constant of integration on the right-hand side . In this case, we can get an explicit solution by taking the reciprocal of both sides.    Note in the last step that we must take the reciprocal of the entire right- hand side at once. The answer is not  . Not at all.   The MATLAB commands to solve this equation are below.   Is MATLAB wrong? Or is its answer an alternate form for what we computed?  "
},
{
  "id": "subsec-separable-diff-eq-10",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-separable-diff-eq-10",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": " Suppose we wish to solve the differential equation . This equation is separable with and . Following the method of the previous example, we will separate the variables and then integrate both sides.   This leads to the implicit solution We can actually solve this to get an explicit formula for . We first take to both sides to get Since is constant and is constant, is constant. To make things a little easier to read, let's set . Then we have where can be any real number except 0. (Why?) However, we note that if were 0, our solution would become which is also a solution of the original differential equation. So we go ahead and allow , and this means that our complete solution is   The MATLAB commands to solve the equation are below.   "
},
{
  "id": "ws-separable-eqns-2",
  "level": "2",
  "url": "sec-separable-eq.html#ws-separable-eqns-2",
  "type": "Objectives",
  "number": "1.4.2",
  "title": "",
  "body": "   To be able to determine whether a given first-order differential equation is separable or not.    To be able to solve separable first-order equations by separating variables and integrating.    "
},
{
  "id": "ws-separable-eqns-4-2",
  "level": "2",
  "url": "sec-separable-eq.html#ws-separable-eqns-4-2",
  "type": "Worksheet Exercise",
  "number": "1.4.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "ws-separable-eqns-4-3",
  "level": "2",
  "url": "sec-separable-eq.html#ws-separable-eqns-4-3",
  "type": "Worksheet Exercise",
  "number": "1.4.2.2",
  "title": "",
  "body": "  "
},
{
  "id": "ws-separable-eqns-4-4",
  "level": "2",
  "url": "sec-separable-eq.html#ws-separable-eqns-4-4",
  "type": "Worksheet Exercise",
  "number": "1.4.2.3",
  "title": "",
  "body": "  "
},
{
  "id": "ws-separable-eqns-4-5",
  "level": "2",
  "url": "sec-separable-eq.html#ws-separable-eqns-4-5",
  "type": "Worksheet Exercise",
  "number": "1.4.2.4",
  "title": "",
  "body": "    "
},
{
  "id": "ws-separable-eqns-4-7",
  "level": "2",
  "url": "sec-separable-eq.html#ws-separable-eqns-4-7",
  "type": "Worksheet Exercise",
  "number": "1.4.2.5",
  "title": "",
  "body": "    "
},
{
  "id": "ws-separable-eqns-4-8",
  "level": "2",
  "url": "sec-separable-eq.html#ws-separable-eqns-4-8",
  "type": "Worksheet Exercise",
  "number": "1.4.2.6",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-init-value-probs-3",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-init-value-probs-3",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": " Suppose we wish to solve the initial-value problem We first separate the variables and write We then integrate both sides to get Using the initial condition (which we read as when , ), we can determine the value of . Since is positive, we choose the positive square root above. Thus the particular solution is   The MATLAB commands for solving this differential equation are below.   "
},
{
  "id": "subsec-init-value-probs-6",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-init-value-probs-6",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": " Consider the initial-value problem This equation is separable and so we first separate the variables. We can now integrate both sides of this equation and obtain where equals . The initial condition tells us that when , . This gives us Therefore, Notice that this solution does not make sense for all values of . In fact, the solution is defined only for , if we require our solution to be continuous. Let's see what MATLAB has to say on the matter.   MATLAB does return a solution even if it looks a bit different than the one that we arrived at above. Notice that we have an imaginary term in our solution, where . We will examine the role of complex numbers and how useful they are in the study of ordinary differential equations in a later chapter, but for the moment complex numbers will just muddy the situation.  "
},
{
  "id": "ex-logistic-growth",
  "level": "2",
  "url": "sec-separable-eq.html#ex-logistic-growth",
  "type": "Example",
  "number": "1.4.10",
  "title": "Logistic Growth.",
  "body": " Logistic Growth  The logistic growth model we saw in qualifies as a separable equation (as well as a homogeneous one). Here's an initial-value problem we can solve using our separate and integrate method: Our starting population is 100 and the carrying capacity for the environment we are modeling is 1000. We first separate the variables. Since is the dependent variable, we get all the 's on the left-hand side, and all the 's (the independent variables) on the right-hand side. To compute the integral on the left, we can use partial fractions to write Equating the numerators of the first and last fractions there (which have the same denominators), we arrive at Grouping by powers of on each side of the equation, we get the system of equations Thus Coming back to our integrals, we now have To solve for , we exponentiate both sides and use properties of exponentials and logarithms to write where . Since , we can remove the absolute values on the left-hand side. where . If we substitute in our initial condition , we find that   "
},
{
  "id": "subsec-init-value-probs-8",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-init-value-probs-8",
  "type": "Activity",
  "number": "1.4.11",
  "title": "Solving Separable Differential Equations.",
  "body": " Solving Separable Differential Equations   Solve each of the following differential equations using the separation of variables technique.                                      "
},
{
  "id": "subsec-Newtons-Law-3",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-Newtons-Law-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's law of cooling "
},
{
  "id": "fig-newton-graph",
  "level": "2",
  "url": "sec-separable-eq.html#fig-newton-graph",
  "type": "Figure",
  "number": "1.4.12",
  "title": "",
  "body": " Newton's law of cooling   "
},
{
  "id": "subsec-Newtons-Law-10",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-Newtons-Law-10",
  "type": "Activity",
  "number": "1.4.13",
  "title": "Coffee Temperature.",
  "body": " Coffee Temperature   The brewing temperature of the water used is very important. It should be between F and F. The closer to F the better. Boiling water ( F) should never be used, as it will burn the coffee. Water that is less than F will not extract properly. On the other hand, coffee that has a temperature of F is too hot to drink. Google the famous MacDonald's lawsuit. Coffee is best when it is served at a temperature of F to F (the Goldilocks range).     Suppose coffee is initially brewed at F. If room temperature is F, set up an initial value problem to model the temperature of the coffee at time , where is the time in minutes after brewing has finished.      Solve the initial value problem from      If the temperature of the coffee drops from F to F in the first two minutes after brewing, how long before the coffee reaches a temperature of F?    "
},
{
  "id": "subsec-mixing-problem-2",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-mixing-problem-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mixing problems "
},
{
  "id": "subsec-mixing-problem-3",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-mixing-problem-3",
  "type": "Example",
  "number": "1.4.14",
  "title": "",
  "body": " Suppose that we have a large tank containing 1000 gallons of pure water and that water containing 0.5 pounds of salt per gallon flows into the tank at a rate of 10 gallons per minute. If the tank is also draining at a rate of 10 gallons per minute, the water level in the tank will remain constant. We will assume that the water in the tank is constantly stirred so that the mixture of salt and water is uniform in the tank.  We can model the amount of salt in the tank using differential equations. If is the amount of salt in the tank at time , then the rate at which the salt is changing in the tank is the difference between the rate at which salt is flowing into the tank and the rate at which it is leaving the tank, or Of course, the salt flows into the tank at the rate of pounds of salt per minute. However, the rate at which the salt leaves the tank depends on , the amount salt in the tank at time . At time , there is pounds of salt in one gallon. Therefore, salt flows out of the tank at a rate of pounds per minute. Equation now becomes This equation is separable, Integrating both sides of the equation, we have or Consequently, where . From our initial condition, we can quickly determine that and models the amount of salt in the tank at time . Notice that as , as expected.  "
},
{
  "id": "subsec-mixing-problem-4",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-mixing-problem-4",
  "type": "Activity",
  "number": "1.4.15",
  "title": "A Brewery Problem.",
  "body": " A Brewery Problem   The vast majority of beers from around the world have alcohol contents of 4 to 6 percent alcohol by volume (for example, Heineken Lager Beer has a 5 percent alcohol content). Suppose a local brewery has produced two beers with different alcohol contents, one 4 percent and one 7 percent. The master brewer would like to add some of the 7 percent beer to the 4 percent beer to obtain a beer with 5 percent alcohol.     A vat contains 500 gallons of 4% alcohol (by volume). Beer with 7% alcohol is pumped into the tank at a rate of 5 gallons per minute. Beer is also pumped out of the vat at a rate of 5 gallons per minute, so there is always 500 gallons in the tank. Set up an initial value problem to model the percentage of alcohol in the vat at time , where is the elapsed time in minutes.      Solve the initial value problem from      What is the percentage of alcohol in the vat after one hour?      At what time will the beer reach 5% alcohol?    "
},
{
  "id": "subsec-retirement-7",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-retirement-7",
  "type": "Activity",
  "number": "1.4.16",
  "title": "A Sports Contract.",
  "body": " A Sports Contract   In December 2023, Shohei Ohtani announced he was signing with the Los Angeles Dodgers. The contract terms were staggering: 10 years and $700 million. To date, this was the largest contract in sports history, eclipsing Lionel Messi's $673 million contract with FC Barcelona. Ohtani will receive $20 million of his $700 million contract with the Los Angeles Dodgers over the next 10 years or $2 million each year. The $680 million remaining will be paid out at $68 million a year over the following 10 years. Clearly, the Los Angeles Dodgers do not have to pay out the entire $700 million at the signing of the contract.     How much is Ohtani's contract worth in December 2023? You may assume that the interest rate over the next 20 years will be 6% (adjusted for inflation).    "
},
{
  "id": "subsec-What-Can-Go-Wrong-3",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-What-Can-Go-Wrong-3",
  "type": "Example",
  "number": "1.4.17",
  "title": "No Explicit Solution.",
  "body": " No Explicit Solution  Consider the equation This equation can be rewritten in the form (Use partial fractions.) Integrating both sides of the equation, we have However, we have no method of solving this last equation explicitly for .  "
},
{
  "id": "subsec-What-Can-Go-Wrong-4",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-What-Can-Go-Wrong-4",
  "type": "Example",
  "number": "1.4.18",
  "title": "Un-integrable functions.",
  "body": " Un-integrable functions  Consider the equation This equation is separable since we can rewrite it in the form Although the Fundamental Theorem of Calculus guarantees that every continuous function has an antiderivative, we cannot find an antiderivative for the function in terms of elementary functions. Thus, we are forced to write our solution as   "
},
{
  "id": "subsec-What-Can-Go-Wrong-5",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-What-Can-Go-Wrong-5",
  "type": "Example",
  "number": "1.4.19",
  "title": "Non-linear equations.",
  "body": " Non-linear equations  Even if we have a separable differential equation, we are not guaranteed a unique solution. Consider the initial value problem with and . Separating the variables, Thus, or If , the initial condition is satisfied and is a solution for . However, we can find at least two additional solutions for : This does not violate because this differential equation is non-linear.  "
},
{
  "id": "subsec-What-Can-Go-Wrong-6",
  "level": "2",
  "url": "sec-separable-eq.html#subsec-What-Can-Go-Wrong-6",
  "type": "Example",
  "number": "1.4.20",
  "title": "Different Intervals, Different Solutions.",
  "body": " Different Intervals, Different Solutions  Suppose that with . Separating the variables, we see that Using the initial condition to solve for , we get This function has a vertical asymptote at . Because we have an initial condition at 0, by , this solution is valid on all of .  On the other hand, suppose instead that . Then the solution is and this solution is valid on .  "
},
{
  "id": "exgroup-find-solutions-3",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-3",
  "type": "Exercise",
  "number": "1.4.8.1",
  "title": "",
  "body": "      "
},
{
  "id": "exgroup-find-solutions-4",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-4",
  "type": "Exercise",
  "number": "1.4.8.2",
  "title": "",
  "body": "      "
},
{
  "id": "exgroup-find-solutions-5",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-5",
  "type": "Exercise",
  "number": "1.4.8.3",
  "title": "",
  "body": "      "
},
{
  "id": "exgroup-find-solutions-6",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-6",
  "type": "Exercise",
  "number": "1.4.8.4",
  "title": "",
  "body": "      "
},
{
  "id": "exgroup-find-solutions-7",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-7",
  "type": "Exercise",
  "number": "1.4.8.5",
  "title": "",
  "body": "    "
},
{
  "id": "exgroup-find-solutions-8",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-8",
  "type": "Exercise",
  "number": "1.4.8.6",
  "title": "",
  "body": "    "
},
{
  "id": "exgroup-find-solutions-9",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-9",
  "type": "Exercise",
  "number": "1.4.8.7",
  "title": "",
  "body": "    "
},
{
  "id": "exgroup-find-solutions-10",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-10",
  "type": "Exercise",
  "number": "1.4.8.8",
  "title": "",
  "body": "    "
},
{
  "id": "exgroup-find-solutions-11",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-11",
  "type": "Exercise",
  "number": "1.4.8.9",
  "title": "",
  "body": "    "
},
{
  "id": "exgroup-find-solutions-12",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-find-solutions-12",
  "type": "Exercise",
  "number": "1.4.8.10",
  "title": "",
  "body": "    "
},
{
  "id": "exgroup-solving-ivps-3",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-3",
  "type": "Exercise",
  "number": "1.4.8.11",
  "title": "",
  "body": "   ,    "
},
{
  "id": "exgroup-solving-ivps-4",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-4",
  "type": "Exercise",
  "number": "1.4.8.12",
  "title": "",
  "body": "   ,    "
},
{
  "id": "exgroup-solving-ivps-5",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-5",
  "type": "Exercise",
  "number": "1.4.8.13",
  "title": "",
  "body": "   ,    "
},
{
  "id": "exgroup-solving-ivps-6",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-6",
  "type": "Exercise",
  "number": "1.4.8.14",
  "title": "",
  "body": "   ,    "
},
{
  "id": "exgroup-solving-ivps-7",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-7",
  "type": "Exercise",
  "number": "1.4.8.15",
  "title": "",
  "body": "  ,   "
},
{
  "id": "exgroup-solving-ivps-8",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-8",
  "type": "Exercise",
  "number": "1.4.8.16",
  "title": "",
  "body": "  ,   "
},
{
  "id": "exgroup-solving-ivps-9",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-9",
  "type": "Exercise",
  "number": "1.4.8.17",
  "title": "",
  "body": "  ,   "
},
{
  "id": "exgroup-solving-ivps-10",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-10",
  "type": "Exercise",
  "number": "1.4.8.18",
  "title": "",
  "body": "  ,   "
},
{
  "id": "exgroup-solving-ivps-11",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-11",
  "type": "Exercise",
  "number": "1.4.8.19",
  "title": "",
  "body": "  ,   "
},
{
  "id": "exgroup-solving-ivps-12",
  "level": "2",
  "url": "sec-separable-eq.html#exgroup-solving-ivps-12",
  "type": "Exercise",
  "number": "1.4.8.20",
  "title": "",
  "body": "  ,   "
},
{
  "id": "exercises-separable-eqns-4",
  "level": "2",
  "url": "sec-separable-eq.html#exercises-separable-eqns-4",
  "type": "Exercise",
  "number": "1.4.8.21",
  "title": "",
  "body": " Use MATLAB to solve the initial value problems in .  "
},
{
  "id": "exercises-separable-eqns-5",
  "level": "2",
  "url": "sec-separable-eq.html#exercises-separable-eqns-5",
  "type": "Exercise",
  "number": "1.4.8.22",
  "title": "Homogeneous Equations.",
  "body": " Homogeneous Equations   A first-order differential equation, , is homogeneous if .  Show that the equation is homogeneous.  Let and show that the equation in part (a) can be written as Use the fact that this new equation is separable to solve for .  Show that any homogeneous equation can be transformed into a separable differential equation by making the substitution .  A function is said to homogeneous of degree if for . Show that differential equation where and are both homogeneous of degree , can be transformed into a separable differential equation using the substitution .  Solve the differential equation  Solve the differential equation    "
},
{
  "id": "exercises-separable-eqns-6",
  "level": "2",
  "url": "sec-separable-eq.html#exercises-separable-eqns-6",
  "type": "Exercise",
  "number": "1.4.8.23",
  "title": "",
  "body": "  Mr. Ratchett, an elderly American, was found murdered in his train compartment on the Orient Express at 7 AM. When his body was discovered, the famous detective Hercule Poirot noted that Ratchett had a body temperature of C. The body had cooled to a temperature of C one hour later. If the normal temperature of a human being is C and the air temperature in the train is C , estimate the time of Ratchett's death using Newton's Law of Cooling.   "
},
{
  "id": "exercises-separable-eqns-7",
  "level": "2",
  "url": "sec-separable-eq.html#exercises-separable-eqns-7",
  "type": "Exercise",
  "number": "1.4.8.24",
  "title": "",
  "body": "  You are starting a new position, and your employer has a generous retirement plan. If you put $500 a month into a 401(k) plan, your employer will match your contributions.  Assuming that you are 25 years old and plan to retire at age 65, how large can you expect your 401(k) pension to be when you retire? Assume that your 401(k) plan will collect interest at a rate of 5%.  If you begin withdrawing $60,000 every year at age 65, how long will your retirement fund last?     "
},
{
  "id": "sec-linear-eq",
  "level": "1",
  "url": "sec-linear-eq.html",
  "type": "Section",
  "number": "1.5",
  "title": "First-Order Linear Equations",
  "body": " First-Order Linear Equations    To understand that any first-order linear differential equation  can be solved by multiplying each side of the equation by an integrating factor .  To understand the existence and uniqueness of solutions to first-order initial value problems.     We recall that a first-order differential equation is linear if the dependent variable (let's use here) and its derivatives appear only to the first power, not multiplied by each other, and not buried within a function (no 's, for instance). In particular, we will say that a first-order differential equation is linear if we can write it in the form for some functions and . Our goal, as it always is when we start out, is to solve this equation explicitly for . In particular, we must have that in some interval. Assuming that it is, we can divide through by and we get our standard form By standard form , we mean a form which we use to check the type of a differential equation. So if we want to check if a given differential equation is a linear, first-order equation, we try to put it into the standard form and match up the parts. for a first-order linear differential equation: (We have suppressed the of 's on the .)  We call the equation homogeneous if the function on the right-hand side .   Is it linear?   The equation is linear. We can reorganize the equation into the standard form and then we can see that and .     Is it linear?   The equation is linear. We can reorganize the equation into standard form and obtain . We then have that and .     Is it linear?   The equation is not linear . Although we can rewrite the equation in the form , the dependent variable is bound up in an exponential ( ).     Is it linear?   The equation is not linear because the dependent variable and its derivative are multiplied together.      Solving First-Order Linear Differential Equations   We can solve many first-order linear differential equations explicitly. In fact, we can get a general method for doing so by first attacking the special case of when our equation is homogeneous.    The Homogeneous Case  Remember that a first-order linear differential equation is homogeneous if, when it's written in standard form, the right-hand side is 0. That is, we can write the equation in the form We now make the following    If our first-order linear differential equation is homogeneous, then it is separable.    We can see this by simply rewriting the differential equation as Thus we can use the methods of to solve. That is, we can separate and integrate: This means that the general solution of the homogeneous equation can be written as    Suppose we wish to solve the homogeneous first-order linear differential equation (that's a mouthful!) We have that . Therefore, by , we have that Setting m we see that the general solution is where . However, we note that if , this would make which is a solution to the original differential equation. So we can let be any real number.  One thing we haven't done much of is to check our solutions. It's a good habit to have. We do this by computing the derivative of and then substituting our answer and its derivative into the original differential equation. If , we use the chain rule to compute and so as expected.     The Non-homogeneous Case  Now we examine the case where the right-hand side of our first-order linear differential equation is not zero; that is . In this case, we will employ a trick. We will multiply both sides of our differential equation by a positive function so that the left-hand side is a perfect product rule derivative .   Product Rule  The derivative of the product of two differentiable functions, and is given by     What we're trying to do here  Let us walk through an example to illustrate the technique that we're going to use here.  Suppose we wish to solve the non-homogeneous first-order linear differential equation This is linear with and . (This equation is not separable though.) We will multiply the entire equation by the function . (For now, don't worry about where our choice for came from.) We then get since . If we look at the left-hand side now, we note that it is the derivative of the product . (Check this using implicit differentiation!) Therefore, we arrive at the equation We now integrate both sides with respect to (the independent variable). On the left-hand side, we take advantage of the Fundamental Theorem of Calculus to note that the integral of a derivative gives us back the original function. Therefore, we have where, as before, we agree to move all the arbitrary constants of integration to the end of the right-hand side and combine them into one big C . We can now solve for by multiplying both sides by (or dividing both sides by if you prefer) to get    The example showed the technique we will use to solve non-homogeneous first-order linear equations, but left one burning question: How did we pick the function that we multiplied the entire equation by? . The function is called an integrating factor . The idea is that multiplying the entire equation through by should give us a perfect product rule derivative on the left-hand side.  Fortunately, we can find a formula for this integrating factor. The left-hand side of our differential equation here, recall, has form . When we multiply through by the integrating factor , we obtain We want . By the product rule, though, we know that . So we need This last differential equation is first-order, linear, and homogeneous. So we can use the method of to solve the equation and get that the formula for the integrating factor is    You may be thinking, Is there a typo? Didn't we drop a minus sign up in the exponent there? The answer is NO . Because the differential equation for had a minus sign before the , this extra minus sign multiplies the minus sign in our homogeneous solution and cancels it out.   In particular, multiplying through by the integrating factor should make the left-hand side of the differential equation into the derivative of the product .    Consider the differential equation This equation is linear with and . We first find the integrating factor : (You may be wondering where the is. For an integrating factor, we just need one solution that works, not all of them. So we make life easier by agreeing to pick the one with .)  We now multiply our differential equation through by our integrating factor . We can now see that the left-hand side is the derivative of . We thus write We now solve for by multiplying through by and we find that We can use MATLAB to check our answer.       A General Formula  We can actually derive a formula for solving the first-order linear differential equation  Suppose we have found our integrating factor . As before, we multiply by : We can now solve the equation by integrating both sides with respect to . Dividing the final expression by gives the explicit solution A comforting aspect of this is that if we have an initial value problem of this type -- in other words, if we are also given an initial condition -- a unique solution (with uniquely determined, that is) exists in a rectangle containing the point .  Though is important theoretically as the general solution of the first-order linear differential equation , we in no way are telling you to memorize it. Just follow the steps from the examples in this section.    Let us now solve an initial value problem.   Solving an Initial Value Problem   Solve the initial value problem Also, determine the behavior of the solution as , both by looking at the formula for the solution and by using a slope field.    We first put by dividing through by . In doing this, we assume that . We have that and . Our integrating factor is (Remember that we can pick the simplest antiderivative of .) We multiply our equation by which leads to This implies that . Solving explicitly for yields The initial condition tells us that when , . Substituting this in above leads to and the particular solution is From this formula, we see that as . At , has a vertical asymptote.  We can use MATLAB to draw the slope field as well as the particular solution. To use the algorithm we used in earlier sections, we have to solve our differential equation for :   % 1. Define the grid for the slope field % Avoid x = 0 to prevent division by zero in the ODE x_vals = linspace(0.1, 5, 25); y_vals = linspace(-2, 5, 25); [X, Y] = meshgrid(x_vals, y_vals); % 2. Calculate the slope (dy\/dx) at each grid point % Using the rearranged ODE: y' = (cos(x) - y) \/ x S = (cos(X) - Y) .\/ X; % 3. Normalize the vector components to maintain uniform segment lengths L = sqrt(1 + S.^2); U = 1 .\/ L; V = S .\/ L; % 4. Create the plot window and draw the slope field figure; % Adjust the 0.5 scale factor to match your preference for segment length quiver(X, Y, U, V, 0.5, 'Color', [0.5, 0.5, 0.5], 'LineWidth', 1); hold on; % 5. Define the ODE function handle for numerical integration dydx = @(x, y) (cos(x) - y) \/ x; % 6. Solve the ODE numerically through the point (1,2) x_span = [1, 5]; % Forward integration path y0 = 2; % Initial condition at x = 1 [x_sol_fwd, y_sol_fwd] = ode45(dydx, x_span, y0); x_span_bwd = [1, 0.1]; % Backward integration path toward x = 0 [x_sol_bwd, y_sol_bwd] = ode45(dydx, x_span_bwd, y0); % Combine forward and backward results for a smooth, unbroken line x_sol = [flipud(x_sol_bwd); x_sol_fwd]; y_sol = [flipud(y_sol_bwd); y_sol_fwd]; % 7. Plot the solution curve and the initial point plot(x_sol, y_sol, 'r-', 'LineWidth', 2.5); % Solution curve in red plot(1, 2, 'bo', 'MarkerFaceColor', 'b', 'MarkerSize', 8); % Target point in blue % 8. Annotations and Layout Adjustments title('Slope Field and Solution Curve for $x y'' + y = \\cos(x)$', 'Interpreter', 'latex', 'FontSize', 14); xlabel('$x$', 'Interpreter', 'latex', 'FontSize', 12); ylabel('$y$', 'Interpreter', 'latex', 'FontSize', 12); axis([0 5 -2 5]); grid on; legend('Slope Field', 'Solution Curve through (1,2)', 'Point (1,2)', 'Location', 'northeast'); hold off;           In-Class Work: Practice with Linear Equations    State whether the given differential equation is linear, separable, both, or neither.                                              In the following exercises, use the method for linear equations to find an explicit solution to the equation and describe what happens to the solution as . (Use MATLAB to draw slope fields as necessary.)      This equation is also separable.         Solve the initial value problems:          Application: Mixing Problems  Many applications involve the mixing of two or more substances together. We can model, for instance, how petroleum products are mixed together in a refinery, how various ingredients are mixed together in a brewery, or how greenhouse gases move across various layers of the earth's atmosphere.   Suppose that a 100-gallon tank initially contains 50 gallons of salt water containing five pounds of salt. A brine mixture containing one pound of salt per gallon flows into the top of the tank at a rate of 5 gallons per minute. A well mixed solution leaves the tank at rate of 4 gallons per minute. We wish to know how much salt is in the tank, when the tank is full.  To construct our model, we will let be the time (measured in minutes) and set up a differential equation that will measure how fast the amount of salt at time , , is changing. We have the initial condition , and where is the volume at time . The expression is the amount of salt in one gallon (the concentration of salt) at time . We have , since the tank starts with 50 gallons and five gallons are pumped into the tank per minute while four gallons leave the tank during the same time interval. (In other words, the liquid in the tank increases by one gallon every minute.) Thus, our differential equation becomes Our equation is linear since we can rewrite it as  An integrating factor for this differential equation is Therefore, if we multiply both sides of equation by , we get We can now apply the product rule to obtain Integrating both sides and simplifying gives us Our initial condition, tells us that and Thus, when the tank is full, and the amount of salt in the tank is pounds. We can use MATLAB to easily check the solution of our initial value problem.     A Mixing Problem   Suppose that a tank contains 1000 gallons of a solution consisting of 200 pounds of salt dissolved in water. Pure water is pumped into the tank at a rate of 6 gallons per minute. At the same time, the tank is drained at the same rate. Assume that the brine mixture is kept well stirred.     Set up an initial value problem to model the amount of salt in the tank at time .      How long will it take until there is only 20 pounds of salt left in the tank?       Financial Models  There are a number of problems in finance that can be modeled using differential equations. Let be the balance of an account at time and suppose that the account pays interest at a rate of percent per year compounded continuously. Suppose that we also allow withdrawals of dollars per year. The net increase in the balance between times and can now be described as Thus,  We can solve the equation by multiplying both sides of the equation by the integrating factor to obtain Integrating both sides of this equation, we have or If we know the initial balance in the account, say , we can determine . That is, or Thus, the solution to our initial value problem is   Suppose that your parents have established a money market account with a balance of $50,000 that they will use to help you pay for your college education. The account receives an average annual interest of 4%. You estimate that your tuition, room and board, and other college expenses to be $20,000 per year.  We model this financial situation with the differential equation Rewriting the differential equation as , our integrating factor becomes , and Thus, The solution to this initial value problem is  Your parents have been quite generous but have told you that you must be responsible for the balance of the cost of your education.    Paying for College   Suppose that new parents want to start a college fund for their child. They are willing to invest $2000 per year at a rate of 4%.     Find an initial value problem that models the parents' investment.      How much will be in the college fund when their child turns 18?      What would they need to invest per year to have $80,000 in the college fund when their child turns 18?        Finding General Solutions   Find the general solution for each equation in . Some of the equations may be separable.                                                                            Solving Initial Value Problems   Solve the initial value problems in .      ,        ,        ,        ,        ,        ,             ,           ,        ,           ,           A 600-liter tank initially contains 200 liters of water containing 10 kilograms of salt. Supposed that water containing 0.1 kilograms of salt per liter flows into the top of the tank at a rate of 10 liters per minute. The water in the tank is kept well mixed, and 5 liters per minute are removed from the bottom of the tank. How much salt is in the tank when the tank is full?    If is the amount of salt in the tank at time , we know that . The volume of the tank is . We can model the amount of salt in the tank at time with a differential equation, The resulting equation is a first order linear differential equation. An integrating factor for this equation is given by Multiplying both sides of the differential equation by , we have Integrating both sides of this equation, we obtain Using the initial condition , we can determine that or The tank is full at time , and the tank contains kilograms of salt when the tank is full.      A manager in a communications company contributes $2400 per year into her retirement fund by making many small deposits throughout the year. The fund grows at a rate of 3.5% per year compounded continuously. After 35 years, she retires and begins withdrawing from the retirement fund at a rate of $3500 per month. If she does not make any deposits after she retires, how long will her retirement fund last?    Divide the problem into two smaller problems one that deals with the situation before retirement and one that deals with the problem after retirement.     Exact Differential Equations   A first-order differential equation, , is exact if there exists a function such that   If and and have continuous first-order partial derivatives on some rectangle in the -plane, then prove that is exact if and only if  Show that the differential equation is exact.  Solve the differential equation .  In general, the differential equation is not exact. However, we can sometimes transform this equation into an exact equation by multiplying the equation by an integrating factor   Show that is integrating factor for .  Show that is integrating factor for .  Show that is integrating factor for .  Show that is integrating factor for .   Solve the differential equation .     For (e), rewrite the equation as and consider the integrating factor .     "
},
{
  "id": "sec-linear-eq-2",
  "level": "2",
  "url": "sec-linear-eq.html#sec-linear-eq-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "  To understand that any first-order linear differential equation  can be solved by multiplying each side of the equation by an integrating factor .  To understand the existence and uniqueness of solutions to first-order initial value problems.   "
},
{
  "id": "sec-linear-eq-3-1",
  "level": "2",
  "url": "sec-linear-eq.html#sec-linear-eq-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear standard form "
},
{
  "id": "sec-linear-eq-3-2",
  "level": "2",
  "url": "sec-linear-eq.html#sec-linear-eq-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous "
},
{
  "id": "sec-linear-eq-3-3",
  "level": "2",
  "url": "sec-linear-eq.html#sec-linear-eq-3-3",
  "type": "Example",
  "number": "1.5.1",
  "title": "Is it linear?",
  "body": " Is it linear?   The equation is linear. We can reorganize the equation into the standard form and then we can see that and .   "
},
{
  "id": "sec-linear-eq-3-4",
  "level": "2",
  "url": "sec-linear-eq.html#sec-linear-eq-3-4",
  "type": "Example",
  "number": "1.5.2",
  "title": "Is it linear?",
  "body": " Is it linear?   The equation is linear. We can reorganize the equation into standard form and obtain . We then have that and .   "
},
{
  "id": "sec-linear-eq-3-5",
  "level": "2",
  "url": "sec-linear-eq.html#sec-linear-eq-3-5",
  "type": "Example",
  "number": "1.5.3",
  "title": "Is it linear?",
  "body": " Is it linear?   The equation is not linear . Although we can rewrite the equation in the form , the dependent variable is bound up in an exponential ( ).   "
},
{
  "id": "sec-linear-eq-3-6",
  "level": "2",
  "url": "sec-linear-eq.html#sec-linear-eq-3-6",
  "type": "Example",
  "number": "1.5.4",
  "title": "Is it linear?",
  "body": " Is it linear?   The equation is not linear because the dependent variable and its derivative are multiplied together.   "
},
{
  "id": "claim-homogeneous-separable",
  "level": "2",
  "url": "sec-linear-eq.html#claim-homogeneous-separable",
  "type": "Claim",
  "number": "1.5.5",
  "title": "",
  "body": "  If our first-order linear differential equation is homogeneous, then it is separable.   "
},
{
  "id": "subsubsec-homogeneous-linear-1-4",
  "level": "2",
  "url": "sec-linear-eq.html#subsubsec-homogeneous-linear-1-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution of the homogeneous equation "
},
{
  "id": "subsubsec-homogeneous-linear-1-5",
  "level": "2",
  "url": "sec-linear-eq.html#subsubsec-homogeneous-linear-1-5",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": " Suppose we wish to solve the homogeneous first-order linear differential equation (that's a mouthful!) We have that . Therefore, by , we have that Setting m we see that the general solution is where . However, we note that if , this would make which is a solution to the original differential equation. So we can let be any real number.  One thing we haven't done much of is to check our solutions. It's a good habit to have. We do this by computing the derivative of and then substituting our answer and its derivative into the original differential equation. If , we use the chain rule to compute and so as expected.  "
},
{
  "id": "subsubsec-nonhomogeneous-linear-1-3",
  "level": "2",
  "url": "sec-linear-eq.html#subsubsec-nonhomogeneous-linear-1-3",
  "type": "Remark",
  "number": "1.5.7",
  "title": "Product Rule.",
  "body": " Product Rule  The derivative of the product of two differentiable functions, and is given by   "
},
{
  "id": "example-linear-1",
  "level": "2",
  "url": "sec-linear-eq.html#example-linear-1",
  "type": "Example",
  "number": "1.5.8",
  "title": "What we’re trying to do here.",
  "body": " What we're trying to do here  Let us walk through an example to illustrate the technique that we're going to use here.  Suppose we wish to solve the non-homogeneous first-order linear differential equation This is linear with and . (This equation is not separable though.) We will multiply the entire equation by the function . (For now, don't worry about where our choice for came from.) We then get since . If we look at the left-hand side now, we note that it is the derivative of the product . (Check this using implicit differentiation!) Therefore, we arrive at the equation We now integrate both sides with respect to (the independent variable). On the left-hand side, we take advantage of the Fundamental Theorem of Calculus to note that the integral of a derivative gives us back the original function. Therefore, we have where, as before, we agree to move all the arbitrary constants of integration to the end of the right-hand side and combine them into one big C . We can now solve for by multiplying both sides by (or dividing both sides by if you prefer) to get   "
},
{
  "id": "subsubsec-nonhomogeneous-linear-1-5",
  "level": "2",
  "url": "sec-linear-eq.html#subsubsec-nonhomogeneous-linear-1-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "subsubsec-nonhomogeneous-linear-1-7",
  "level": "2",
  "url": "sec-linear-eq.html#subsubsec-nonhomogeneous-linear-1-7",
  "type": "Remark",
  "number": "1.5.9",
  "title": "",
  "body": " You may be thinking, Is there a typo? Didn't we drop a minus sign up in the exponent there? The answer is NO . Because the differential equation for had a minus sign before the , this extra minus sign multiplies the minus sign in our homogeneous solution and cancels it out.  "
},
{
  "id": "subsubsec-nonhomogeneous-linear-1-9",
  "level": "2",
  "url": "sec-linear-eq.html#subsubsec-nonhomogeneous-linear-1-9",
  "type": "Example",
  "number": "1.5.10",
  "title": "",
  "body": "  Consider the differential equation This equation is linear with and . We first find the integrating factor : (You may be wondering where the is. For an integrating factor, we just need one solution that works, not all of them. So we make life easier by agreeing to pick the one with .)  We now multiply our differential equation through by our integrating factor . We can now see that the left-hand side is the derivative of . We thus write We now solve for by multiplying through by and we find that We can use MATLAB to check our answer.    "
},
{
  "id": "subsubsec-gen-formula-3",
  "level": "2",
  "url": "sec-linear-eq.html#subsubsec-gen-formula-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution of the first-order linear differential equation "
},
{
  "id": "subsec-solve-linear-1-6-2",
  "level": "2",
  "url": "sec-linear-eq.html#subsec-solve-linear-1-6-2",
  "type": "Example",
  "number": "1.5.11",
  "title": "Solving an Initial Value Problem.",
  "body": " Solving an Initial Value Problem   Solve the initial value problem Also, determine the behavior of the solution as , both by looking at the formula for the solution and by using a slope field.    We first put by dividing through by . In doing this, we assume that . We have that and . Our integrating factor is (Remember that we can pick the simplest antiderivative of .) We multiply our equation by which leads to This implies that . Solving explicitly for yields The initial condition tells us that when , . Substituting this in above leads to and the particular solution is From this formula, we see that as . At , has a vertical asymptote.  We can use MATLAB to draw the slope field as well as the particular solution. To use the algorithm we used in earlier sections, we have to solve our differential equation for :   % 1. Define the grid for the slope field % Avoid x = 0 to prevent division by zero in the ODE x_vals = linspace(0.1, 5, 25); y_vals = linspace(-2, 5, 25); [X, Y] = meshgrid(x_vals, y_vals); % 2. Calculate the slope (dy\/dx) at each grid point % Using the rearranged ODE: y' = (cos(x) - y) \/ x S = (cos(X) - Y) .\/ X; % 3. Normalize the vector components to maintain uniform segment lengths L = sqrt(1 + S.^2); U = 1 .\/ L; V = S .\/ L; % 4. Create the plot window and draw the slope field figure; % Adjust the 0.5 scale factor to match your preference for segment length quiver(X, Y, U, V, 0.5, 'Color', [0.5, 0.5, 0.5], 'LineWidth', 1); hold on; % 5. Define the ODE function handle for numerical integration dydx = @(x, y) (cos(x) - y) \/ x; % 6. Solve the ODE numerically through the point (1,2) x_span = [1, 5]; % Forward integration path y0 = 2; % Initial condition at x = 1 [x_sol_fwd, y_sol_fwd] = ode45(dydx, x_span, y0); x_span_bwd = [1, 0.1]; % Backward integration path toward x = 0 [x_sol_bwd, y_sol_bwd] = ode45(dydx, x_span_bwd, y0); % Combine forward and backward results for a smooth, unbroken line x_sol = [flipud(x_sol_bwd); x_sol_fwd]; y_sol = [flipud(y_sol_bwd); y_sol_fwd]; % 7. Plot the solution curve and the initial point plot(x_sol, y_sol, 'r-', 'LineWidth', 2.5); % Solution curve in red plot(1, 2, 'bo', 'MarkerFaceColor', 'b', 'MarkerSize', 8); % Target point in blue % 8. Annotations and Layout Adjustments title('Slope Field and Solution Curve for $x y'' + y = \\cos(x)$', 'Interpreter', 'latex', 'FontSize', 14); xlabel('$x$', 'Interpreter', 'latex', 'FontSize', 12); ylabel('$y$', 'Interpreter', 'latex', 'FontSize', 12); axis([0 5 -2 5]); grid on; legend('Slope Field', 'Solution Curve through (1,2)', 'Point (1,2)', 'Location', 'northeast'); hold off;       "
},
{
  "id": "ws-linear-eqs-2",
  "level": "2",
  "url": "sec-linear-eq.html#ws-linear-eqs-2",
  "type": "Worksheet Exercise",
  "number": "1.5.2.1",
  "title": "",
  "body": "  State whether the given differential equation is linear, separable, both, or neither.                                             "
},
{
  "id": "ws-linear-eqs-4",
  "level": "2",
  "url": "sec-linear-eq.html#ws-linear-eqs-4",
  "type": "Worksheet Exercise",
  "number": "1.5.2.2",
  "title": "",
  "body": "  "
},
{
  "id": "ws-linear-eqs-5",
  "level": "2",
  "url": "sec-linear-eq.html#ws-linear-eqs-5",
  "type": "Worksheet Exercise",
  "number": "1.5.2.3",
  "title": "",
  "body": " This equation is also separable.  "
},
{
  "id": "ws-linear-eqs-6",
  "level": "2",
  "url": "sec-linear-eq.html#ws-linear-eqs-6",
  "type": "Worksheet Exercise",
  "number": "1.5.2.4",
  "title": "",
  "body": "  "
},
{
  "id": "ws-linear-eqs-7",
  "level": "2",
  "url": "sec-linear-eq.html#ws-linear-eqs-7",
  "type": "Worksheet Exercise",
  "number": "1.5.2.5",
  "title": "",
  "body": "  "
},
{
  "id": "ws-linear-eqs-9",
  "level": "2",
  "url": "sec-linear-eq.html#ws-linear-eqs-9",
  "type": "Worksheet Exercise",
  "number": "1.5.2.6",
  "title": "",
  "body": "  "
},
{
  "id": "ws-linear-eqs-10",
  "level": "2",
  "url": "sec-linear-eq.html#ws-linear-eqs-10",
  "type": "Worksheet Exercise",
  "number": "1.5.2.7",
  "title": "",
  "body": "  "
},
{
  "id": "subsec-app-mixing-probs-3",
  "level": "2",
  "url": "sec-linear-eq.html#subsec-app-mixing-probs-3",
  "type": "Example",
  "number": "1.5.13",
  "title": "",
  "body": " Suppose that a 100-gallon tank initially contains 50 gallons of salt water containing five pounds of salt. A brine mixture containing one pound of salt per gallon flows into the top of the tank at a rate of 5 gallons per minute. A well mixed solution leaves the tank at rate of 4 gallons per minute. We wish to know how much salt is in the tank, when the tank is full.  To construct our model, we will let be the time (measured in minutes) and set up a differential equation that will measure how fast the amount of salt at time , , is changing. We have the initial condition , and where is the volume at time . The expression is the amount of salt in one gallon (the concentration of salt) at time . We have , since the tank starts with 50 gallons and five gallons are pumped into the tank per minute while four gallons leave the tank during the same time interval. (In other words, the liquid in the tank increases by one gallon every minute.) Thus, our differential equation becomes Our equation is linear since we can rewrite it as  An integrating factor for this differential equation is Therefore, if we multiply both sides of equation by , we get We can now apply the product rule to obtain Integrating both sides and simplifying gives us Our initial condition, tells us that and Thus, when the tank is full, and the amount of salt in the tank is pounds. We can use MATLAB to easily check the solution of our initial value problem.   "
},
{
  "id": "subsec-app-mixing-probs-4",
  "level": "2",
  "url": "sec-linear-eq.html#subsec-app-mixing-probs-4",
  "type": "Activity",
  "number": "1.5.14",
  "title": "A Mixing Problem.",
  "body": " A Mixing Problem   Suppose that a tank contains 1000 gallons of a solution consisting of 200 pounds of salt dissolved in water. Pure water is pumped into the tank at a rate of 6 gallons per minute. At the same time, the tank is drained at the same rate. Assume that the brine mixture is kept well stirred.     Set up an initial value problem to model the amount of salt in the tank at time .      How long will it take until there is only 20 pounds of salt left in the tank?    "
},
{
  "id": "subsec-financial-models-4",
  "level": "2",
  "url": "sec-linear-eq.html#subsec-financial-models-4",
  "type": "Example",
  "number": "1.5.15",
  "title": "",
  "body": " Suppose that your parents have established a money market account with a balance of $50,000 that they will use to help you pay for your college education. The account receives an average annual interest of 4%. You estimate that your tuition, room and board, and other college expenses to be $20,000 per year.  We model this financial situation with the differential equation Rewriting the differential equation as , our integrating factor becomes , and Thus, The solution to this initial value problem is  Your parents have been quite generous but have told you that you must be responsible for the balance of the cost of your education.  "
},
{
  "id": "subsec-financial-models-5",
  "level": "2",
  "url": "sec-linear-eq.html#subsec-financial-models-5",
  "type": "Activity",
  "number": "1.5.16",
  "title": "Paying for College.",
  "body": " Paying for College   Suppose that new parents want to start a college fund for their child. They are willing to invest $2000 per year at a rate of 4%.     Find an initial value problem that models the parents' investment.      How much will be in the college fund when their child turns 18?      What would they need to invest per year to have $80,000 in the college fund when their child turns 18?    "
},
{
  "id": "ex-group-find-gen-solns-3",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-3",
  "type": "Exercise",
  "number": "1.5.5.1",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-find-gen-solns-4",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-4",
  "type": "Exercise",
  "number": "1.5.5.2",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-find-gen-solns-5",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-5",
  "type": "Exercise",
  "number": "1.5.5.3",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-find-gen-solns-6",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-6",
  "type": "Exercise",
  "number": "1.5.5.4",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-find-gen-solns-7",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-7",
  "type": "Exercise",
  "number": "1.5.5.5",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-find-gen-solns-8",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-8",
  "type": "Exercise",
  "number": "1.5.5.6",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-find-gen-solns-9",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-9",
  "type": "Exercise",
  "number": "1.5.5.7",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-find-gen-solns-10",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-10",
  "type": "Exercise",
  "number": "1.5.5.8",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-find-gen-solns-11",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-11",
  "type": "Exercise",
  "number": "1.5.5.9",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-find-gen-solns-12",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-find-gen-solns-12",
  "type": "Exercise",
  "number": "1.5.5.10",
  "title": "",
  "body": "      "
},
{
  "id": "ex-group-solve-lin-ivps-3",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-3",
  "type": "Exercise",
  "number": "1.5.5.11",
  "title": "",
  "body": "   ,    "
},
{
  "id": "ex-group-solve-lin-ivps-4",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-4",
  "type": "Exercise",
  "number": "1.5.5.12",
  "title": "",
  "body": "   ,    "
},
{
  "id": "ex-group-solve-lin-ivps-5",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-5",
  "type": "Exercise",
  "number": "1.5.5.13",
  "title": "",
  "body": "   ,    "
},
{
  "id": "ex-group-solve-lin-ivps-6",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-6",
  "type": "Exercise",
  "number": "1.5.5.14",
  "title": "",
  "body": "   ,    "
},
{
  "id": "ex-group-solve-lin-ivps-7",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-7",
  "type": "Exercise",
  "number": "1.5.5.15",
  "title": "",
  "body": "   ,    "
},
{
  "id": "ex-group-solve-lin-ivps-8",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-8",
  "type": "Exercise",
  "number": "1.5.5.16",
  "title": "",
  "body": "   ,         "
},
{
  "id": "ex-group-solve-lin-ivps-9",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-9",
  "type": "Exercise",
  "number": "1.5.5.17",
  "title": "",
  "body": "   ,       "
},
{
  "id": "ex-group-solve-lin-ivps-10",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-10",
  "type": "Exercise",
  "number": "1.5.5.18",
  "title": "",
  "body": "   ,    "
},
{
  "id": "ex-group-solve-lin-ivps-11",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-11",
  "type": "Exercise",
  "number": "1.5.5.19",
  "title": "",
  "body": "   ,       "
},
{
  "id": "ex-group-solve-lin-ivps-12",
  "level": "2",
  "url": "sec-linear-eq.html#ex-group-solve-lin-ivps-12",
  "type": "Exercise",
  "number": "1.5.5.20",
  "title": "",
  "body": "   ,       "
},
{
  "id": "exercises-lin-eqs-3",
  "level": "2",
  "url": "sec-linear-eq.html#exercises-lin-eqs-3",
  "type": "Exercise",
  "number": "1.5.5.21",
  "title": "",
  "body": "  A 600-liter tank initially contains 200 liters of water containing 10 kilograms of salt. Supposed that water containing 0.1 kilograms of salt per liter flows into the top of the tank at a rate of 10 liters per minute. The water in the tank is kept well mixed, and 5 liters per minute are removed from the bottom of the tank. How much salt is in the tank when the tank is full?    If is the amount of salt in the tank at time , we know that . The volume of the tank is . We can model the amount of salt in the tank at time with a differential equation, The resulting equation is a first order linear differential equation. An integrating factor for this equation is given by Multiplying both sides of the differential equation by , we have Integrating both sides of this equation, we obtain Using the initial condition , we can determine that or The tank is full at time , and the tank contains kilograms of salt when the tank is full.   "
},
{
  "id": "exercises-lin-eqs-4",
  "level": "2",
  "url": "sec-linear-eq.html#exercises-lin-eqs-4",
  "type": "Exercise",
  "number": "1.5.5.22",
  "title": "",
  "body": "  A manager in a communications company contributes $2400 per year into her retirement fund by making many small deposits throughout the year. The fund grows at a rate of 3.5% per year compounded continuously. After 35 years, she retires and begins withdrawing from the retirement fund at a rate of $3500 per month. If she does not make any deposits after she retires, how long will her retirement fund last?    Divide the problem into two smaller problems one that deals with the situation before retirement and one that deals with the problem after retirement.   "
},
{
  "id": "exercises-lin-eqs-5",
  "level": "2",
  "url": "sec-linear-eq.html#exercises-lin-eqs-5",
  "type": "Exercise",
  "number": "1.5.5.23",
  "title": "Exact Differential Equations.",
  "body": " Exact Differential Equations   A first-order differential equation, , is exact if there exists a function such that   If and and have continuous first-order partial derivatives on some rectangle in the -plane, then prove that is exact if and only if  Show that the differential equation is exact.  Solve the differential equation .  In general, the differential equation is not exact. However, we can sometimes transform this equation into an exact equation by multiplying the equation by an integrating factor   Show that is integrating factor for .  Show that is integrating factor for .  Show that is integrating factor for .  Show that is integrating factor for .   Solve the differential equation .     For (e), rewrite the equation as and consider the integrating factor .   "
},
{
  "id": "sec-num-analysis",
  "level": "1",
  "url": "sec-num-analysis.html",
  "type": "Section",
  "number": "1.6",
  "title": "Analyzing Equations Numerically",
  "body": " Analyzing Equations Numerically    To understand that numerical algorithms such as Euler's method allow the approximation of solutions to the initial value problems and that there are more efficient algorithms than Euler's method such as those algorithms that use the Runge-Kutta methods .  To understand that Taylor's Theorem is a very useful tool for studying differential equations.  To understand that error analysis of the rate of convergence is very important for any numerical algorithm.     As we've already seen, we can't always find a solution to a first-order initial value problem analytically. It could be the case that we cannot integrate a function in terms of elementary functions, for instance. (It's not you, it's the integral!) However, we may still need a reasonable approximation of the solution curve to make estimates. We will explore some methods in this section on numerically approximating solutions to these problems.  Our initial value problem provides us with one point on the desired solution curve, namely . Our goal is to produce a set of discrete points that can approximate points on the solution curve. For this purpose, we will insist that the -coordinates be equally spaced. That is, and the corresponding is an approximation of the solution at ; that is, . Once this list of points is obtained, it is usually plotted by connecting the points by straight-line segments; or, if you are using a sophisticated computer package, a curve fitting routine may be used to fit a smooth curve through the points.  The presence of a term may put us in mind of our previous work on defining definite integrals in terms of Riemann sums. As with that situation, our approximations improve as the step size shrinks, but the calculations become difficult, especially because we humans are prone to rounding off answers, leading to error accumulating as we perform more calculations. Using computers can fend this off for awhile, but even computers have a maximum word size and run into this issue after several steps. Also, different methods have different error estimates based on the size of .    Euler's method  We have already seen the usefulness of slope (or direction) fields in visualizing solution curves. If we consider the initial value problem , we recall that we would draw a short line segment of slope through the point . This line segment is part of the tangent line to the solution curve at .   Euler's method is one of the oldest and simplest numerical methods for obtaining approximate solutions to the initial value problem . Visually, the method says that we would start at our initial point and follow the tangent line of slope until we arrive at a point units to the right. This will bring us to the point . We recompute our slope as and follow a line segment of this slope from until we arrive at a point units further to the right. This will bring us to the point . We then adjust our slope to be and follow the line segment of that slope from to . We continue in this manner until we reach the point . (See .)   Euler's method      Notice that no derivatives of have to be evaluated, just itself.   Algorithm for Euler's Method  Given , , our goal is to find approximate values of on the interval .    Choose a small step size , with a positive integer.    For , compute     Plot the points and connect them by drawing straight lines. This results in a piecewise linear approximation to on the interval .       Approximate the solution of , on the interval .    We first note that .  Let's first try this with points. Then we have that . It is helpful to make a table. The values are all determined once is chosen.   Euler's method table                                               Thus .  A couple of comments:     The value of at the end of each row is used as the value of in the following row. The values of and come from the initial condition we're given.    The function is the slope function and depends on the differential equation we're given.    We can use MATLAB to produce a table:  % Define the differential equation y' = f(x, y) f = @(x, y) x - y; % Initial conditions x0 = 0; y0 = 1; xmax = 2; % Configuration num_steps = 4; % Number of steps to generate 4 points after the initial condition h = (xmax - x0)\/num_steps; % Initialize arrays to hold the values x = zeros(num_steps + 1, 1); y = zeros(num_steps + 1, 1); f_val = zeros(num_steps + 1, 1); % Set the initial point x(1) = x0; y(1) = y0; f_val(1) = f(x(1), y(1)); % Euler's Method loop for n = 1:num_steps % Calculate next y value: y_next = y_curr + h * f(x_curr, y_curr) y(n+1) = y(n) + h * f_val(n); % Advance x x(n+1) = x(n) + h; % Calculate f(x, y) at the new point (except for the last point, where it's optional) if n < num_steps + 1 f_val(n+1) = f(x(n+1), y(n+1)); end end % Create and display the table Step = (0:num_steps)'; EulerTable = table(Step, x, y, f_val, 'VariableNames', {'n', 'x_n', 'y_n', 'f(x_n,y_n)'}); disp(EulerTable);      The differential equation in this example is linear: . Using the method from , we get that . (Check this!) This gives the exact value of The absolute error in our numerically computed value of in the above table is If the calculations are redone with , that is with , the corresponding table is   Euler's method table                                                                           Thus .  The error in the approximate value of is now By cutting the step size in half the error has been cut approximately in half, from 0.146 to 0.070. shows the two approximate solutions together plotted with the exact solution.   Euler's method approximations to with        Use MATLAB to generate a table for the case from the example.     In-Class Work on Euler's Method   Use Euler's method to find an approximate value for to four decimal places, given that is the solution to the IVP using first , then . Feel free to use your calculator or MATLAB to do the calculations.    Unlike the previous problem, the initial value problem can be solved by us by hand. (The equation is separable.)  Solve the equation by hand and determine the values of , up to .   Then use Euler's method with and compare the values you get for , up to . Feel free to use your calculator or MATLAB to do the calculations.      Error and the Order of a Numerical Method  We demonstrated Euler's method above on a differential equation we knew how to solve; we would never use this method on such an equation. (Why approximate when we can get an exact answer, and then express that as a decimal?) This was done to convince you that such a method can get results.  We would use a numerical method in the case where we can't get a solution analytically. Because of this, we are duty bound to estimate the error in using the numerical method.  There are two different types of error that can occur when solving a differential equation numerically. The first is called round-off error and is due to rounding off or chopping the result after each step of the procedure, in order to store it on a computer with fixed word size. For example, if , and the computer has a word size of 4 decimal digits, then it would probably store as 0.3333, already introducing an error greater than 0.00003 into the calculation. Fortunately, modern computers can store a lot more digits than this so it is usually not a problem, unless the procedure requires a huge number of steps.  The type of error you really need to be concerned about is caused by the approximations made by whatever method you are using. This is called truncation error .  Suppose we're trying to solve the initial value problem , for . If the slope function can be differentiated enough times, could be approximated by the first terms of its Taylor series about : where the error is known by Taylor's theorem to be for some value of between and .   "
},
{
  "id": "sec-num-analysis-2",
  "level": "2",
  "url": "sec-num-analysis.html#sec-num-analysis-2",
  "type": "Objectives",
  "number": "1.6",
  "title": "",
  "body": "  To understand that numerical algorithms such as Euler's method allow the approximation of solutions to the initial value problems and that there are more efficient algorithms than Euler's method such as those algorithms that use the Runge-Kutta methods .  To understand that Taylor's Theorem is a very useful tool for studying differential equations.  To understand that error analysis of the rate of convergence is very important for any numerical algorithm.   "
},
{
  "id": "subsec-eulers-method-3",
  "level": "2",
  "url": "sec-num-analysis.html#subsec-eulers-method-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler's method "
},
{
  "id": "fig-eulers-method",
  "level": "2",
  "url": "sec-num-analysis.html#fig-eulers-method",
  "type": "Figure",
  "number": "1.6.1",
  "title": "",
  "body": " Euler's method     "
},
{
  "id": "subsec-eulers-method-6",
  "level": "2",
  "url": "sec-num-analysis.html#subsec-eulers-method-6",
  "type": "Note",
  "number": "1.6.2",
  "title": "Algorithm for Euler’s Method.",
  "body": " Algorithm for Euler's Method  Given , , our goal is to find approximate values of on the interval .    Choose a small step size , with a positive integer.    For , compute     Plot the points and connect them by drawing straight lines. This results in a piecewise linear approximation to on the interval .    "
},
{
  "id": "subsec-eulers-method-7",
  "level": "2",
  "url": "sec-num-analysis.html#subsec-eulers-method-7",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": "  Approximate the solution of , on the interval .    We first note that .  Let's first try this with points. Then we have that . It is helpful to make a table. The values are all determined once is chosen.   Euler's method table                                               Thus .  A couple of comments:     The value of at the end of each row is used as the value of in the following row. The values of and come from the initial condition we're given.    The function is the slope function and depends on the differential equation we're given.    We can use MATLAB to produce a table:  % Define the differential equation y' = f(x, y) f = @(x, y) x - y; % Initial conditions x0 = 0; y0 = 1; xmax = 2; % Configuration num_steps = 4; % Number of steps to generate 4 points after the initial condition h = (xmax - x0)\/num_steps; % Initialize arrays to hold the values x = zeros(num_steps + 1, 1); y = zeros(num_steps + 1, 1); f_val = zeros(num_steps + 1, 1); % Set the initial point x(1) = x0; y(1) = y0; f_val(1) = f(x(1), y(1)); % Euler's Method loop for n = 1:num_steps % Calculate next y value: y_next = y_curr + h * f(x_curr, y_curr) y(n+1) = y(n) + h * f_val(n); % Advance x x(n+1) = x(n) + h; % Calculate f(x, y) at the new point (except for the last point, where it's optional) if n < num_steps + 1 f_val(n+1) = f(x(n+1), y(n+1)); end end % Create and display the table Step = (0:num_steps)'; EulerTable = table(Step, x, y, f_val, 'VariableNames', {'n', 'x_n', 'y_n', 'f(x_n,y_n)'}); disp(EulerTable);      The differential equation in this example is linear: . Using the method from , we get that . (Check this!) This gives the exact value of The absolute error in our numerically computed value of in the above table is If the calculations are redone with , that is with , the corresponding table is   Euler's method table                                                                           Thus .  The error in the approximate value of is now By cutting the step size in half the error has been cut approximately in half, from 0.146 to 0.070. shows the two approximate solutions together plotted with the exact solution.   Euler's method approximations to with     "
},
{
  "id": "subsec-eulers-method-8",
  "level": "2",
  "url": "sec-num-analysis.html#subsec-eulers-method-8",
  "type": "Checkpoint",
  "number": "1.6.7",
  "title": "",
  "body": "  Use MATLAB to generate a table for the case from the example.   "
},
{
  "id": "ws-eulers-method-2",
  "level": "2",
  "url": "sec-num-analysis.html#ws-eulers-method-2",
  "type": "Worksheet Exercise",
  "number": "1.6.1.1",
  "title": "",
  "body": " Use Euler's method to find an approximate value for to four decimal places, given that is the solution to the IVP using first , then . Feel free to use your calculator or MATLAB to do the calculations.  "
},
{
  "id": "ws-eulers-method-3",
  "level": "2",
  "url": "sec-num-analysis.html#ws-eulers-method-3",
  "type": "Worksheet Exercise",
  "number": "1.6.1.2",
  "title": "",
  "body": " Unlike the previous problem, the initial value problem can be solved by us by hand. (The equation is separable.)  Solve the equation by hand and determine the values of , up to .   Then use Euler's method with and compare the values you get for , up to . Feel free to use your calculator or MATLAB to do the calculations.  "
},
{
  "id": "subsec-error-Euler-4",
  "level": "2",
  "url": "sec-num-analysis.html#subsec-error-Euler-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "round-off error "
},
{
  "id": "subsec-error-Euler-5",
  "level": "2",
  "url": "sec-num-analysis.html#subsec-error-Euler-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truncation error "
},
{
  "id": "subsec-error-Euler-6",
  "level": "2",
  "url": "sec-num-analysis.html#subsec-error-Euler-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Taylor's theorem "
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
