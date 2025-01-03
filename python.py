
# classes
class ClassName():
    
    # this function is called upon creation of the class
    # self is just a reference to itself so it can access its data and functions, attrbutes and methods

    def __init__(self, str1):
        self.string = str1
    
    def printString(self):
        print(self.string)

# list comprehension
listComprehension = False
if (listComprehension):
            
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

# quick reference lists functions
listFunctions = False
if (listFunctions):
    myList = [1,2,3]
    myList.append(4)
    myList.extend([5,6])
    myList.insert(6, 7) # 6 is the index
    myList += [8,9]
    myList.pop() # removes from the end of the list, returning the value can also pop at index .pop(2)
    myList.remove(8) # removes first occurance of 8
    # myList.clear() # completely clears the list
    myList[1]
    myList[0:-1]
    myList.index(3) # gives index of the first occurrence of 3
    shallowCopy = myList.copy()
    print("string".join(["h", "e", "l", "l", "o"]))
    any([None, None, 1]) # true
    all([1, 1, 1]) # true

# bitwise operators and applications
bitwiseOperators = False
if (bitwiseOperators):

    # bitwise AND &
    # returns 1 if both bits are 1, else 0
    mybyte = 0b00001100 # decimal: 12
    mybyte2 = 0b00101000 # decimal: 40
    (mybyte & mybyte2) # 8
    # this is commonly used in masking
    # for example, see if the 1 bit is flipped to determine if the number is odd or even
    # mynumber = 23*16*15-123+43*23-(12*5**2)+1
    # mybyte = 0b1 # check to see if the 1's bit is on
    # if (mynumber & mybyte == 1):
    #     print("number is odd")
    # else:
    #     print("number is even")
    # print(mynumber)
        
    # bitwise OR |
    # returns 1 if at least one of the 2 bits are 1
    mybyte = 0b1110 # 14
    mybyte2= 0b1010 # 10
    (mybyte | mybyte2) # 1110 or 14
    # commonly used to set bits ON

    # Bitwise XOR ^
    # returns 1 if only 1 of the bits is on. e.g. 11 -> 0
    mybyte = 0b1110
    mybyte2= 0b1010
    (mybyte ^ mybyte2) # 0100, or 4
    # commonly used to toggle bits

    # Bitwise NOT ~
    # inverts the bits. Single operand
    # in python, defined as -x-1 due to twos complement
    mybyte= 0b0010
    (~mybyte) # 0101 or 5 supposedly, but actually -11
        
    # Bitwise Right Shift >>
    # shifts bits to the right the number of spaces specified
    # new spaces are filled with a 0
    mybyte = 0b0010
    (mybyte >> 1)
    # used to divide by 2

    # Bitwise Left Shift <<
    # shifts bits to the right the number of spaces specified
    # new spaces are filled with a 0
    mybyte = 0b0010
    (mybyte << 1)
    # used to multiply by 2

# quick reference dictionary functions
dictionaryFunctions = False
if (dictionaryFunctions):
    myDictionary = {"hello" : 1000, "aeiou" : Exception(), 100 : print}
    myDictionary.get(100, len) # returns value for key (1st arg), else default value (2nd arg)

# Python has sets
# Sets are implemented similar to dicts, and are performant
setOperations = False
if (setOperations):
    mySet = {"my", "set"}
    myEmptySet = set()
    myEmptyDictionary = {} # !!!!

    mySet1 = {1,2,3,4,5,6}
    mySet2 = {5,6,7,8,9,10}

    # Checking for membership in a set
    print( 1 in mySet1) # True. 
    # Speed: O(1) on average, O(n) worst case 

    # adding an element. Changes the set inplace. 
    mySet1.add(7) 
    # Speed: O(1) on average, O(n) worst case
    # print(mySet1) # {1, 2, 3, 4, 5, 6, 7}

    # Union, merging two sets. duplicates removed. Returns a new set
    # print(mySet1 | mySet2) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    # print(mySet1.union(mySet2))
    # Speed: O(len(s1) + len(s2))

    # Intersection, outputs common elements. Returns a new set
    print(mySet1 & mySet2) # {5, 6, 7}
    print(mySet1.intersection(mySet2))
    # mySet1 &= mySet2  # this changes mySet1 inplace to the intersection
    # print(mySet1.intersection_update(mySet2))
    # print(mySet1, mySet2) # {5, 6, 7} {5, 6, 7, 8, 9, 10}
    # Speed: O(min(len(s1), len(s2))), worst case O(len(s1)*(len(s2)))
    # Multiple Intersection (s1 & s2 & sN) Speed: (N-1)*O(max(len(s1, s2, sN)))

    # Difference, outputs elements in A not in B. Returns a new set
    # NOTE: Does not include elements in B not in A
    print(mySet1.difference(mySet2)) # {1, 2, 3, 4}
    print(mySet1 - mySet2 ) # {1, 2, 3, 4}
    # Speed: O(len(s1))


    # Symmetric Difference, outputs elements that are not in common
    print(mySet1.symmetric_difference(mySet2))
    print(mySet1 ^ mySet2)
    # Speed: O(len(s1)). Worst case O(len(s1)*len(s2))
    # edits the set inplace
    # print(mySet1.symmetric_difference_update(mySet2))
    # mySet1 ^= mySet2
    # Speed: O(len(s2)). Worse case O(len(s2)*len(s3))


