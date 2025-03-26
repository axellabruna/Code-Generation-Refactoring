def factorial (n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
    
choise = int(input("Enter a number: "))
print("Factorial of", choise, "is", factorial(choise))
