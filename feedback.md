# Feedback 

## General

 - Overall the logic of the code for your functions is really tidy and understandable - well done!
 - Your testing is a little varied - sometimes it's really thorough, sometimes there's not much there! Always try to build up your functions from simpler test cases using TDD. As much as anything, this acts as documentation for me, so that I can see how you have built your kata solution up 

## dnaPairs

### What Went Well
 - This is a really easy to follow solution - I really like that you've split your string into an array to deal with each character as an entirely separate entity.

### Even Better If
 - This test suite is pretty sparse. It would be good TDD for you to build up your test suite with a string of one character first
 - it looks like you considered a few different solutions to this problem, as you still have a stray RegEx there. As you have split your string up into an array, how could you use a method like `map` to refactor this solution?
 - You could also consider using a `lookup object` for this function:
 ```
 const lookupPair = {
    A : 'T',
    G : 'C',
    ...
 }
 ```
You can then reference this object to find the appropriate pair for each item using object notation!

## getTweetData

### What Went Well
 - This is a really thorough test suite - I like that you have checked each property of your result object individually to avoid failing future tests when you add new functionality.

### Even Better If
 - When writing your assertions, use `toBe` when comparing primitive data types like numbers or strings, and `toEqual` for arrays and objects.
 - There is aa additional bit of functionality that needs to be tested here - that your tags/mentions arrays only contain _unique_ values. I can see that functionality is in your code, but it hasn't been tested!

## calcualteDivisors

### What Went Well
 - This is a nicely written function with really nice logic, well done!

### Even Better If
  - For this function we only want to include multiples of 3 and 5 that are _below_ our passed number - your function could account for this by just making your for loop `i < num` rather than `i <= num`
  - The testing for this function is quite sparse as well. I would want a test for numbers that are lower than 3, for 3 itself (to check 3 returns 0), and a test for 4/5 to check they return 3.

## updateRemoteStudents

### What Went Well
 - This is a nice build up of your function using TDD, testing multiple elements, then one element, then multiple. You could consider adding a test to see how your function responds to an input of an array of length 1, which has an object with a location property already set.
 - Fantastic use of a combination of map and spread to avoid mutation of your nested objects!

### Even Better If
 - Your test descriptions here are quite vague: `empty`, `more complicated`. Describe the behaviour that you are testing for:

 `When passed an empty array, returns an empty array`, 

 `correctly adds location property to an array of mutliple objects`

 - Your mutation test should be separate to your other tests to prevent them from becoming cluttered and difficult to read.
 - You used map beautifully to avoid mutation, but the logic of your for loop could be included in your map as well!

## tillAddition

### What Went Well
 - This is a well sctructured function that shows you're thinking about different aspects. Your use of `toFixed` is an intelligent solution to the problem of decimals!
 - 

### Even Better If
 - This code isn't as 'dry' as it could be - how could you make your solution less repetitive by looping through the keys of your object?
 - As your input for this function is an object, some mutation/reference testing would be necessary to ensure its purity

## changeCalculator

### What Went Well
 - Your test suite is building up really clearly in difficulty, which is great to see!
 - It's great that you've built the order of your function from biggest coin downwards!

### Even Better If
 - Your function only goes up to 10p, so it could still be expanded on!
 - This function is a little difficult to read. All of the logic of your function is on individual lines - could this be broken up to be more easy on the eyes?
 - Again this code is quite repetitive - is there a way we could use iteration to avoid so many similar lines?