const handleSorting = (sortType) => {
    let temp = sortType;
    console.log(sortType);
    switch (temp) {
        case 'newest':
            return (a, b) => new Date(b.created) - new Date(a.created);
        default:
            break;
    }
};

export default handleSorting;