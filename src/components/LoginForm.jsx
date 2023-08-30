function ListElements (){
    const list=[
        'akash',
        'gattu',
        'srinivasulu'
    ]
    
    return(
       <div key={item}>{list.map(list => <li>{list}</li>)}</div>
    );
}

export default LoginForm ;