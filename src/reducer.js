export const initialState={
      user:null,
      playlists:[],
      playing:false,
      item:null,
    //   token:"BQDkk4i4UBgFcekNqwWfje3cbx2oxOlp9Joe1CG4ZHpYmWBXt8-SFi5HbPXebyka01dYhvXCj9wK56MkvAYobopd9JB5LATIDOlFoA1ePVfAoZIq4bnAzNBxwgK5LyoLIqXZ2v9KPmDORSQkC2HIfRnCa9zWvJPumnGtJl6K7MnIW_XYOdDa_lw2lBd77LfUnVnlsulL3HRQVjzchNdR"
}

const reducer=(state,action)=>{
    console.log("action",action)
    switch(action.type){
        case 'SET_USER':   return{
           ...state,
           user:action.user
        }
        case 'SET_TOKEN':   return{
            ...state,
            token:action.token
         }

         case 'SET_PLAYLISTS':   return{
            ...state,
            Playlists:action.Playlists
         }

         case 'SET_DISCOVER_WEEKLY':   return{
            ...state,
            discover_weekly:action.discover_weekly
         }
        default:
            return state;
      
    }
}
export default reducer