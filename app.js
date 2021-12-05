
const akash = [
    
    {
       id       :  12565,
       name     : 'akash',
       roll     :  6,
       salari   :  60000,
       location :  'manikgonj'
       
    },

    {
        id       :  65847,
        name     : 'achem',
        roll     :  8,
        salari   :  70000,
        location :  'mirpur'
        
     },

     {
        id       :  54875,
        name     : 'abu said',
        roll     :  10,
        salari   :  40000,
        location :  'kholna'
        
     },

     {
        id       :  25487,
        name     : 'nur amin',
        roll     :  18,
        salari   :  80000,
        location :  'shelet'
        
     },

     {
        id       :  45875,
        name     : 'raihan',
        roll     :  30,
        salari   :  90000,
        location :  'dhaka'
        
     },
]

total = 0;

akash.map((data) => {

    total = total + data.salari ;

    console.log(`
    id          :${data.id}
    name        :${data.name}
    roll        :${data.roll}
    salari      :${data.salari}
    location    :${data.location}
---------------------------------------  

    ` );
})



console.log(`
    total salari :${total}

`);
