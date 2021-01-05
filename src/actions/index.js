export const USER_SELECTED = 'USER_SELECTED'
export function SelectCitation(citation){
    
    return{
        type: USER_SELECTED,
        payload: citation
    }
}