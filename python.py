
# classes
class ClassName():
    
    # this function is called upon creation of the class
    # self is just a reference to itself so it can access its data and functions, attrbutes and methods

    def __init__(self, str1):
        self.string = str1
    
    def printString(self):
        print(self.string)


# list comprehension
        
# newlist = [expression for item in iterable if condition == true]
exampleList = ["apple", "banana", "orange"]
exampleList2 = [[1,2,3],["a1","b2","c3"],[("marry"),("jerry"),("moe")]]

# iterable and iterable are the same
example = [iterable for iterable in exampleList]

# print(example)
# ['apples', 'bananas', 'oranges']

example = [item[1] for item in exampleList2]
# print(example)
# [2, 'b2', 'jerry']

example = [item[1].upper() for item in exampleList]
# print(example)
# ['P', 'A', 'R']

example = [x for x in range(10) if x < 5]
# print(example)
# [0, 1, 2, 3, 4]

example = [x if x != "banana" else "orange" for x in exampleList]
# print(example)
# ['apple', 'orange', 'orange']