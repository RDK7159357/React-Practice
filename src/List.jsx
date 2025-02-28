import PropTypes from 'prop-types';
function List({items=[],category="Category"}){

    const itemList = items;
    
    const Listitems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <strong>{item.calories}</strong></li>);
    return(
        <>
            <h3 className="list-category">{category}</h3>
                 <ol className="list-items">
            {Listitems}
        </ol>
        </>
   
   
);
}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
    category: PropTypes.string
}

export default List;
{/* <ol>
    {lowCalList}
    </ol>
    <ol>
    {highCalList}
    </ol> */}
// fruits.sort((a,b)=> a.name.localeCompare(b.name)); // Alphabetical order
// fruits.sort((a,b)=>b.name.localeCompare(a.name)); // Reverse Alphabetical order
// fruits.sort((a,b)=>a.calories-b.calories); // Ascending order
// fruits.sort((a,b)=>b.calories-a.calories); // Desc


// const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
// const lowCalList = lowCalFruits.map(lowCalfruit => <li key={lowCalfruit.id}>{lowCalfruit.name}: &nbsp; <strong>{lowCalfruit.calories}</strong></li>);
// const highCalFruits = fruits.filter(fruit => fruit.calories>=100);
// const highCalList = highCalFruits.map(highCalfruit => <li key={highCalfruit.id}>{highCalfruit.name}: &nbsp; <strong>{highCalfruit.calories}</strong></li>);