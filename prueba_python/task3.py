import math
from itertools import combinations

# get the distances between 2 points
def getDistance(p1, p2):
    m = p1[0] - p2[0]
    n = p1[1] - p2[1]
    return math.sqrt(m**2 + n**2)

# Receive 4 points
def isSquare(a, b, c, d):
    points = [a, b, c, d]
    poinstCombinations = list(combinations(points, 2)) # Possible combinations of points
    distancesPoints = []
    distacensCombinations = [] # Possible combinations of distances
    numOfEqualDistances = 0
    
    # gets the distance between each combination of points
    for poin1, point2 in poinstCombinations:
        distancesPoints.append(getDistance(poin1, point2))

    distacensCombinations = list(combinations(distancesPoints, 2))
    
    # compares all the distances, between the points combination
    # if 4 distances are equal, the points create a square 
    for distance1, distance2 in distacensCombinations:
        if (distance1 == distance2):
            numOfEqualDistances += 1
        if (numOfEqualDistances >= 4):
            return "Es un cuadrado"

    return "No es un cuadrado"


def start():
    print("Primer Punto:")
    x = float(input("X:"))
    y = float(input("Y:"))
    a = (x, y)

    print("Segundo Punto:")
    x = float(input("X:"))
    y = float(input("Y:"))
    b = (x, y)

    print("Tercer Punto:")
    x = float(input("X:"))
    y = float(input("Y:"))
    c = (x, y)

    print("Cuarto Punto:")
    x = float(input("X:"))
    y = float(input("Y:"))
    d = (x, y)

    # a = (1, 4)
    # b = (4, 7)
    # c = (4, 1)
    # d = (7, 4)

    print(isSquare(a, b, c, d))