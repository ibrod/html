import random

def is_prime(n, k=10):
    if n == 2 or n == 3:
        return True
    if n <= 1 or n % 2 == 0:
        return False

    d = n - 1
    r = 0
    while d % 2 == 0:
        d //= 2
        r += 1

    for _ in range(k):
        a = random.randint(2, n - 2)
        x = pow(a, d, n)
        if x == 1 or x == n - 1:
            continue

        for _ in range(r - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                break
        else:
            return False
    return True

def find_prime(start, end, k):
    for i in range(start, end):
        if is_prime(i,k):
            return i

if __name__ == '__main__':
    while True:
        a,b,c=map(int,input().split())
        print(find_prime(a,b,c))
        print('------------------')