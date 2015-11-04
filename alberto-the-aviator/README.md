# [Alberto the Aviator](https://community.topcoder.com/stat?c=problem_statement&pm=13024), taken from [topcoder](https://www.topcoder.com)

Alberto is an aviation pioneer. He pilots an airplane called "14-bis". Initially, there are F units of fuel in the fuel tank of his airplane.

There are some flight missions Alberto may take. The missions all start and end in the same location, and he may do them in any order. However, he can only do each mission at most once. You are given two int[]s of the same length: duration and refuel. For each valid i:
- duration[i] is the amount of fuel consumed while running mission i
- After Alberto completes mission i and gets paid, he will buy refuel[i] units of fuel. This amount will always be strictly smaller than the amount consumed during the mission.

Alberto can only choose a mission if he has enough fuel for it. That is, at the beginning of the mission his fuel tank must have at least duration[i] units of fuel.

Compute and return the maximum number of missions Alberto can take.


### Definition :

Parameters:
- F: int
- duration: int[]
- refuel: int[]

Returns: int


### Constraints
-	F will be between 1 and 5,000 inclusive.
-	duration and refuel will have between 1 and 50 elements, inclusive.
-	Each element of duration will be between 1 and 5,000, inclusive.
-	Each element of refuel will be between 0 and 5,000, inclusive.
-	For each i, refuel[i] will be strictly smaller than duration[i].
-	duration and refuel will contain the same number of elements.


### The challenge:
Implement your solution in the language of your choice. Write the solution in a clear and readable code. If you have an optimal solution, way to go! If not, no worries! You get some extra points if you add some fantasy!

Happy coding !
