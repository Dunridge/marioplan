

export const createProject = project => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to the database to add the project but first we'll need to create a Firebase project
        const firestore = getFirestore();
        firestore.collection('projects').add({ //because we receive the project object with all of the details 
            ...project,
            authorFirstName: 'Max',
            authorLastName: 'Polinka',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    };
};
