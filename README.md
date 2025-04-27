IT-2234(P) - Web Services and Server Technologies

Day 09 - 2025.04.24

Outputs

(01)Insert document for students collection.

	shell query  -->
 	
		{
			"regno": "2021ICT59",
			"name": "Sanka",
			"age": 25,
			"gender": "M",
			"degree": "IT",
			"GPA": 3.37,
			"skills": [
				"MongoDB",
				"java",
				"MySQL"
			]
		}
	
![Output_1_InsertDocument](https://github.com/user-attachments/assets/27b9f424-b031-4f40-aacb-2c4e87db5e48)

![Output_2_InsertDocument](https://github.com/user-attachments/assets/61b51977-6277-4eae-977b-337feb668d82)




(02)Insert one data set at a once

	shell query  -->
 	
		db.Student.insertOne(
		{
			"regno": "2021ASP03",
			"name": "Hasindu",
			"age": 24,
			"gender": "M",
			"degree": "CS",
			"GPA": 3.2,
			"skills": [
				"Java",
				"MatLap",
				"MySQL"
			]
		}
		)
		
	
![Output_3_InsertOne](https://github.com/user-attachments/assets/78bcfeaf-6187-40d1-96a9-d27724ab2ba6)

		

(03)Insert many data sets at a once

	shell query  -->
 
		db.Student.insertMany(
		[
		{
			"regno": "2021ICT15",
			"name": "Shani",
			"age": 23,
			"gender": "F",
			"degree": "IT",
			"GPA": 3.0,
			"skills": [
				"C++",
				"Java",
				"Python"
			]
		},

		{
			"regno": "2021ASP45",
			"name": "Dil",
			"age": 24,
			"gender": "M",
			"degree": "Maths",
			"GPA": 3.42,
			"skills": [
				"Java",
				"JS",
				"HTML"
			]
		},
		{
			"regno": "2021ICT112",
			"name": "Dini",
			"age": 22,
			"gender": "F",
			"degree": "IT",
			"GPA": 3.71,
			"skills": [
				"C++",
				"Java",
				"Python"
			]
		}
		]
		)


	
![Output_4_InsertMany](https://github.com/user-attachments/assets/a66cc720-b21d-4b89-8fba-b2c6b134860d)

![Output_5_InsertMany2](https://github.com/user-attachments/assets/638ebeca-cc87-43d8-a420-efc3db8010ce)


(04)Find all students details

	shell query  -->
	
		db.Student.find()

![Output_6_FInd](https://github.com/user-attachments/assets/82df9fbd-46b6-4f49-a756-8172bc076584)


Updated List After Inserting

![Output_7_UpdatedListAfterInsert](https://github.com/user-attachments/assets/daf6bdca-7654-4ebd-8570-060cc49b2e8e)


Updated List After Inserting (As a Chart)

![Output_8_UpdatedListAfterInsert_Chart](https://github.com/user-attachments/assets/1ee4afef-aec6-4f6c-8b64-2232f3af2ada)



(05)Show only name and age of students

	Project --> {name:1,age:1,_id:0}

![Output_9_ShowOnlyNameAndAge](https://github.com/user-attachments/assets/ad52ca5c-abef-4e44-bc36-39351945e00e)


(06)Find the details whose regno is "2021ICT59"

		{regno:"2021ICT59"}

![Output_10_FindByRegno](https://github.com/user-attachments/assets/ef8659ce-bf94-4266-98a7-765d6207dac6)


	shell query -->
	
		db.Student.find({"regno":"2021ICT59"})

![Output_11_FindByRegnoShellQuery](https://github.com/user-attachments/assets/74a40f7f-b8c8-4fb5-a28f-5d834de57c8a)



(07)How to find only female students

	Project --> {gender:"F"}


![Output_12_FindOnlyFemaleStudents](https://github.com/user-attachments/assets/97aab227-7cac-4ce4-8588-993c89fd830a)

	shell query -->
	
		db.Student.find({"gender":"F"}) 

![Output_13_FindOnlyFemaleStudentsShellQuery](https://github.com/user-attachments/assets/574528f2-4b74-4fe7-99a0-ad770be5654c)



(08)Find the students whose age is greater than 23

		{age:{$gt:23}}

  ![Output_14_FindAgeGreaterThan23](https://github.com/user-attachments/assets/a939484b-1773-4088-92e6-cd89f4cffa3a)

		
	shell query -->
	
		db.Student.find({age:{$gt:23}})

![Output_15_FindAgeGreaterThan23ShellQuery](https://github.com/user-attachments/assets/d5488cd4-7117-4e9a-b58d-9ddde855909e)


(09)How to find students who have skills in C++

		{skills:{$in:['C++']}}

![Output_16_FindWhoKnowsC++](https://github.com/user-attachments/assets/18682a9d-be65-4ae8-8ada-cd6f7d86348d)


	shell query -->
	
		db.Student.find({skills:{$in:['C++']}})

![Output_17_FindWhoKnowsC++ShellQuery](https://github.com/user-attachments/assets/af63ebc9-b1b9-429d-a23b-c9b2dc154da4)



(10)How to find students who have skills in C++ and MongoDB

		{skills:{$in:['C++','MongoDB']}}

  ![Output_18_FindWhoKnowsC++AndMongoDB](https://github.com/user-attachments/assets/2e2499e9-2bb5-4ab5-8094-3511da9c2d50)


	shell query -->

		db.Student.find({skills:{$in:['C++','MongoDB']}})

![Output_19_FindWhoKnowsC++AndMongoDBShellQuery](https://github.com/user-attachments/assets/7657b091-e0a2-403f-aacd-84153f25cc22)


(11)Find the details of first female student.

	shell query -->
		
		db.Student.findOne({gender:"F"})

![Output_20_FindFirstFemaleStudent](https://github.com/user-attachments/assets/ed593094-ee18-4f90-9138-ff56794653d0)


(12)Sort the students by GPA in ascending order

		sort --> {GPA:1}

![Output_21_SortByGPAAscendingOrder](https://github.com/user-attachments/assets/afeab144-bd96-4d34-a643-79942018f9d7)



	shell query -->
		db.Student.find().sort({GPA:1})


![Output_22_SortByGPAAscendingOrderShellQuery1](https://github.com/user-attachments/assets/c354e7f1-1a8e-4c7b-88ee-d33f4edcafbd)

![Output_23_SortByGPAAscendingOrderShellQuery2](https://github.com/user-attachments/assets/854e1353-6b60-4abf-99d2-652eb3da5634)


(13)Sort the details by GPA in descending order

	sort --> {GPA:-1}

 ![Output_24_SortByGPADescendingOrder](https://github.com/user-attachments/assets/49513d44-48ac-4ada-b359-c3e9a8036485)


	shell query -->
		
		db.Student.find().sort({GPA:-1})

![Output_25_SortByGPADescendingOrderShelQuery1](https://github.com/user-attachments/assets/d9e476a2-b24f-4a12-94d3-7a031065a57f)

![Output_26_SortByGPADescendingOrderShelQuery2](https://github.com/user-attachments/assets/94bbb0c7-ae85-48d1-a373-585d30d67e3d)


(14)Sort details by GPA and name in ascending order.

	sort --> {GPA:1,name:1}

 ![Output_27_SortByGPAAndNameAscendingOrder](https://github.com/user-attachments/assets/66fd397a-f35a-46bd-8ff8-136b3bbf6eef)


	shell query -->
	
		db.Student.find().sort({GPA:1,name:1})

![Output_28_SortByGPAAndNameAscendingOrderShelQuery](https://github.com/user-attachments/assets/ec231835-fb15-4dd6-aba1-8e2d07dbf1a6)

![Output_29_SortByGPAAndNameAscendingOrderShelQuery2](https://github.com/user-attachments/assets/d20006ca-bcf5-46e5-bd37-3625416f2986)



(15)Sort IT students by GPA

	query --> {degree:"IT"}
	sort--> {GPA:1}

![Output_30_SortOnlyITStudentsByGPA](https://github.com/user-attachments/assets/36a980ba-a63e-4dca-b397-25dad5016254)


	shell query -->
	
		db.Student.find({'degree':'IT'}).sort({'GPA':1})

  ![Output_31_SortOnlyITStudentsByGPAShellQuery](https://github.com/user-attachments/assets/f3cfa17a-5a0d-40ee-8fae-269fa6f915ed)


(16)Sort by age ascending order who are stydying "IT" as the degree and gender is "Female".

	query --> {degree:"IT",gender:"F"}
	sort--> {age:1}

 ![Output_32_SortOnlyFemaleITStudentsByAge](https://github.com/user-attachments/assets/2845c466-9b60-4ef2-9c51-9b5232e4338f)


	shell query --> 
		
		db.Student.find({'degree':'IT','gender':'F'}).sort({'age':1})


  ![Output_33_SortOnlyFemaleITStudentsByAgeShellQuery](https://github.com/user-attachments/assets/483bd107-8096-473f-add4-e7aa41cc7b7e)

