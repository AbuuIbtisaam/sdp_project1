import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:4321",
});

//get
export const getStudents = (callback) => {
    instance.get('/get/students/').then((res) => {
        callback && callback(res?.data || [] )
    }).catch((err) => {
        console.log(err)
    })
}

export const getStaff = (callback) => {
    instance.get('/get/staff/').then((res) => {
        callback && callback(res?.data || [] )
    }).catch((err) => {
        console.log(err)
    })
}

//post
export const postStudent = (data = {}) => {
    return instance.post('/new/student/', {
        ...data
    }).then(() => {
        return true;
    }).catch((err) => {
        console.log(err)
    })
}

export const postStaff = (data = {}) => {
    return instance.post('/new/staff/', {
        ...data
    }).then(() => {
        return true;
    }).catch((err) => {
        console.log(err)
    })
}

//update
export const updateStudent = (id, updatedStudent) => {
    return instance.patch(`/upadate/student/${id}`, updatedStudent).then(() => {
        return true;
    }).catch((err) => {
        console.log(err)
    })
}

export const updateStaff = (id, updatedStaff) => {
    return instance.patch(`/upadate/staff/${id}`, updatedStaff).then(() => {
        return true;
    }).catch((err) => {
        console.log(err)
    })
}

//delete
export const deleteStudent = (id) => {
    return instance.delete(`/delete/student/${id}`).then(() => {
        return true;
    }).catch((err) => {
        console.log(err)
    })
}

export const deleteStaff = (id) => {
    return instance.delete(`/delete/staff/${id}`).then(() => {
        return true;
    }).catch((err) => {
        console.log(err)
    })
}