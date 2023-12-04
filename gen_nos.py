import random
import sys

while True:
    a = random.randint(2, 12)
    b = random.randint(2, 12)
    print(f"{a} * {b}")
    try:
        input("Press any key to continue")
    except KeyboardInterrupt:
        pass
print("Exiting...")