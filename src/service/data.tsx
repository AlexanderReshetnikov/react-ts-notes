export interface INote {
    name: string,
    description: string,
    changed: Date,
    content: string
}

export const data:INote[] = [
    {        
        name: "Заметка 1",
        description: "какое-то описание заметки 1",
        changed: new Date(2019,8,12),
        content: "Эта заметка про то как мы писали какой-то текст в поле Контент первой же заявки"
    },
    {
        name: "Заметка 2, да пока еще не три",
        description: "какое-то описание заметки 2",
        changed: new Date(2019,9,12),
        content: "А эта заметка про содержимое второй заметки"
    },
    {
        name: "Заметка 3, уже не вторая",
        description: "описание заметки 3",
        changed: new Date(2019,9,10),
        content: "алыв оп ывпль влды пьвы джьажфы ьавыцьп выь пжвыьб жы фып"        
    },
    {
        name: "Заметка 4",
        description: "чтото про заметку 4",
        changed: new Date(2019,9,11),
        content: "алыв оп ывпль влды пьвы джьажфы ьавыцьп выь пжвыьб жы фыпА эта заметка про содержимоеА эта заметка про содержимоеА эта заметка про содержимоеА эта заметка про содержимоеА эта заметка про содержимоеА эта заметка про содержимое"        
    }
]