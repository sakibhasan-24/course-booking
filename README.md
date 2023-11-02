# Project Link (Netlify)

##### https://booking-course.netlify.app/

# Tools

- react
- tailwind css
- Fake Data

# features

- initially load 12 data

- each card has image and text,title and a button(functional)
- after click button one course will add(if again clicked show a alert already added)
- simultaneously if course add then credit Hour will increase and remaining hour(20) will decrease.
- if some one try to add more than 20 credit hours a message will show
- no course delete or remove options(work on letter)
- fully responsive

# State Management

- if i clicked a button then i can grave the button easily inside Course Component.i have get data and others.But problem is that this data come from Courses Component.So i need to use state Lifting.it means i need to doing my functionality inside Courses Component and send it as props in Course Component

- use Four State For holding data remaining time,setEnrolled Course,total credit Hour.

* for loading data using useEffect.Use dependency for ensure only render one
