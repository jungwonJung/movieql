export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id))
    return filteredPeople[0]
}

export const people = [
    {
    id :"1",
    name : "jungwon",
    age : 29,
    gender : "male"
},
{
    id :"2",
    name : "wonjung",
    age : 123,
    gender : "male"
},
{
    id :"3",
    name : "12314",
    age : 123,
    gender : "male"
},
{
    id :"4",
    name : "12314",
    age : 234,
    gender : "male"
},
]