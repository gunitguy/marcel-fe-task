# Weird legal requirements

### Task:
Imagine a sample sorter: a machine that is responsible for placing a test tube into one of many racks.
This machine can recognize the test tube (read its id) and place it into the specified rack.
Here comes your task. Write an application that will allow the user to insert a list of test tubes, and
then it will assign them to racks based on the following logic:

1. Each tube contains a material for a specific patient
2. It is illegal to place patients of the same age into the same rack
3. It is illegal to place patients working in the same company into the same rack
4. It is illegal to place patients who live in the same city district into the same rack
5. It is illegal to place patients with the same vision defect into the same rack
6. The number of racks is very limited