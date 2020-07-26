export const SidebarReducer = (state, action) => {
    switch (action.type) {
        case 'SIDEBAR_OPEN':
            return {
                ...state,
                expanded: true
            };
        case 'SIDEBAR_CLOSE':
            return {
                ...state,
                expanded: false
            };
        default:
            return state;
    }
}