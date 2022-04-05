// eslint-disable-next-line import/no-anonymous-default-export
export default  (posts=[],action)=>{   //initial state=posts=[]
    switch (action.type) {   //action.type=FETCH_ALL or CREATE or UPDATE or DELETE or LIKE
        case "FETCH_ALL":
            return posts=action.payload;//the result all posts = action.payload
        case "FETCH_BY_SEARCH":
            return action.payload;
        // case "START_LOADING":
        //     return {...posts,isLoading: true};
        // case "STOP_LOADING":
        //     return {...posts,isLoading: false};    
        case "FETCH_POST":
            return {...posts,post:action.payload};
        case "LOGOUT_DO":
            return posts=[];
        case "CREATE":
            return [...posts,action.payload];
            
        case "UPDATE":
            return posts.map(post=>(post._id===action.payload._id )? action.payload : post);  //map=>change something in the array and return whole array
        
        case "DELETE":
            return posts.filter(post=>post._id!==action.payload );//remove array element where conition matches.
        case "LIKE":
            return posts.map(post=>(post._id===action.payload._id ) ? action.payload : post);
        
        default:
            return posts;
    }
}