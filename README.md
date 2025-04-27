IT-2234(P) - Web Services and Server Technologies

Day 09 - 2025.04.24

Outputs

(01)Insert document for students collection.

	shell query  -->
	
![Output_1_InsertDocument](https://github.com/user-attachments/assets/27b9f424-b031-4f40-aacb-2c4e87db5e48)

![Output_2_InsertDocument](https://github.com/user-attachments/assets/61b51977-6277-4eae-977b-337feb668d82)




(02)Insert one data set at a once

	shell query  -->
	
![Output_3_InsertOne](https://github.com/user-attachments/assets/78bcfeaf-6187-40d1-96a9-d27724ab2ba6)

		

(03)Insert many data sets at a once

	shell query  -->
	
![Output_4_InsertMany](https://github.com/user-attachments/assets/a66cc720-b21d-4b89-8fba-b2c6b134860d)

![Output_5_InsertMany2](https://github.com/user-attachments/assets/638ebeca-cc87-43d8-a420-efc3db8010ce)


(04)Find all students details

	shell query  -->
	
		db.Student.find()


(05)Show only name and age of students

	Project --> {name:1,age:1,_id:0}


(06)Find the details whose regno is "2021ICT59"

		{regno:"2021ICT59"}

	shell query -->
	
		db.Student.find({"regno":"2021ICT59"})


(07)How to find only female students

	Project --> {gender:"F"}

	shell query -->
	
		db.Student.find({"gender":"F"}) 



(08)Find the students whose age is greater than 23

		{age:{$gt:23}}
		
	shell query -->
	
		db.Student.find({age:{$gt:23}})



(09)How to find students who have skills in C++

		{skills:{$in:['C++']}}


	shell query -->
	
		db.Student.find({skills:{$in:['C++']}})



(10)How to find students who have skills in C++ and MongoDB

		{skills:{$in:['C++','MongoDB']}}

	shell query -->

		db.Student.find({skills:{$in:['C++','MongoDB']}})


(11)Find the details of first female student.

	shell query -->
		
		db.Student.findOne({gender:"F"})



(12)Sort the students by GPA in ascending order

		sort --> {GPA:1}

	shell query -->
		db.Student.find().sort({GPA:1})


(13)Sort the details by GPA in descending order

	sort --> {GPA:-1}

	shell query -->
		
		db.Student.find().sort({GPA:-1})

(14)Sort details by GPA and name in ascending order.

	sort --> {GPA:1,name:1}

	shell query -->
	
		db.Student.find().sort({GPA:1,name:1})


(15)Sort IT students by GPA

	query --> {degree:"IT"}
	sort--> {GPA:1}

	shell query -->
	
		db.Student.find({'degree':'IT'}).sort({'GPA':1})

(16)Sort by age ascending order who are stydying "IT" as the degree and gender is "Female".

	query --> {degree:"IT",gender:"F"}
	sort--> {age:1}

	shell query --> 
		
		db.Student.find({'degree':'IT','gender':'F'}).sort({'age':1})
