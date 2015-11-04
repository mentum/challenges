# 
# Strategy : use a heap as a priority queue to store possible missions in the right order
#

from heapq import heappush, heappop

def maximum_fligths(fuel, duration, refuel):
	possible_missions = 0
	priorityQueue = []
	nb_missions = len(duration)


	for i in range (0, nb_missions):
		if fuel >= duration[i]:
			diff = duration[i] - refuel[i]
			heappush(priorityQueue, (diff, (duration[i], refuel[i])))
	
	while len(priorityQueue) > 0 and fuel > 0:
		mission = heappop(priorityQueue)
		fuel -= mission[0]
		if fuel >= 0:
			possible_missions += 1

	return possible_missions

assert 1 == maximum_fligths(10, [10], [0])
assert 2 == maximum_fligths(10, [8, 4], [0, 2])
assert 3 == maximum_fligths(12, [4, 8, 2, 1], [2,0,0,0])
assert 2 == maximum_fligths(9, [4, 6], [0,1])
assert 0 == maximum_fligths(100, [101], [100])
assert 3 == maximum_fligths(1947, [2407, 2979, 1269, 2401, 3227, 2230, 3991, 2133, 3338, 356, 2535, 3859, 3267, 365], [2406, 793, 905, 2400, 1789, 2229, 1378, 2132, 1815, 355, 72, 3858, 3266, 364])
