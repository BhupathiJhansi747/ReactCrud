const initialValues: any = {
    device: {},
    Devices: [],
    isLoading: false,
    error: ''
}
export const Reducers = (state = initialValues, action: any) => {
    switch (action.type) {
        //getallldevices
        case 'GETALL_SUCCESS':
            return {
                ...state,
                Devices: action.payload,
                isLoading: false,
                error: action.error
            }
        case 'GETALL_FAIL':
            return {
                ...state,
                Devices: [],
                isLoading: false,
                error: action.error
            }
            //adddevice
        case 'ADDDEVICE_SUCCESS':
            return {
                ...state,
                device: action.payload,
                isLoading: false,
                error: ''

            }
        case 'ADDDEVICE_FAIL':
            return {
                ...state,
                device: action.payload,
                isLoading: false,
                error: action.error

            }
            //updatedevice
        case 'UPDATEDEVICE_SUCCESS':
            return {
                ...state,
                device: action.payload,
                isLoading: false,
                error: ''

            }
        case 'UPDATEDEVICE_FAIL':
            return {
                ...state,
                device: action.payload,
                isLoading: false,
                error: action.error

            }
     //getbyid
        case 'GETBYID_SUCCESS':
            return {
                ...state,
                device: action.payload,
                isLoading: false,
                error: ''

            }
        case 'GETBYID_FAIL':
            return {
                ...state,
                device: action.payload,
                isLoading: false,
                error: action.error

            }
   //delete
        case 'DELETEDEVICE_SUCCESS':
            return {
                ...state,
                device: action.payload,
                isLoading: false,
                error: ''
            }
        case 'DELETEDEVICE_FAIL':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }

        default: return state;
    }
}

