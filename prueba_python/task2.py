
def triangular(n):
    x = n*(n+1)/2
    return x.is_integer()

def pentagono(n):
    x = n*(3*n-1)/2
    return x.is_integer()
    
def hexagono(n):
    x = n*(2*n-1)/1
    return x.is_integer()


def start(n):
    m = n
    n += 1
    while True:
        if (triangular(n) and pentagono(n) and hexagono(n)):
            break
        else:
            n=+ 1
    
    print ("Despues de " + str(m) + "; " + str(n) + " es el siguiente entero triangular, pentagonal y hexagonal")
 
