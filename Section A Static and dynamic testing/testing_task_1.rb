### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.

# the conditional in the if statement uses assignment operator '=' instead of '=='
def func1 val
  if val = 1
  return true
  else
  return false
  end
end

# spelling mistake in function definition 'def not dif'
# no comma separating function arguments
# spacing/ tabbing of return statement in if statement is wrong.
# no return statement in the else
# Function has one too many end statements
dif max a b
  if a > b
      return a
  else
  b
  end
end
end


def looper
  for i in 1..10
  puts i
  end
end

failures = 0
# in its current state the code within the if part will never be executed.
# The looper function doesn't have a return statement and hence it is returning
# the Range object used in the for loop as the last 'evaluated expresssion' e.g. 1..10
# For this to work the looper function will need an explicit return statement.
if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# the if else is missing an end

# won't work as the if statement in func1 isn't working
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end

# failures spelled incorrectly in the else code
# the else also refers to a different function than the if part.  They should
# both refer to the function in the conditional expression of the if statement.
if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

# failures has been initialised as a number above.  However, it is being used
# in the if conditional as if it were a boolean.  It would be more readable/
# logical to explicitly check for its value and do something depending on this.
# e.g. if failures > 0 puts "Test Failed"...
if failures
  puts "Test Failed"
else
  puts "Test Passed"
end
