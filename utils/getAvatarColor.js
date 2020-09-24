export default letter => {
    const charCode = letter.charCodeAt();
    if (charCode >= 1048 && charCode <= 1055) {
        return {
            background: '#f5d6d9',
            color: '#f38181'
        };
    }
    if (charCode >= 1049 && charCode <= 1063) {
        return {
            background: '#f8ecd5',
            color: '#f1a32f'
        };
    }
    if (charCode >= 1064 && charCode <= 1071) {
        return {
            background: '#dad5f8',
            color: '#816cff'
        };
    }
    return {
        background: '#e9f5ff',
        color: '#2a86ff'
    };
}