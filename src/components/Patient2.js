function Patient2({patients2Data}) {
    return (
        <>
            {patients2Data.data?.map(patients2 => (
                <tr>
                    <td>{patients2.first_name}</td>
                    <td>{patients2.last_name}</td>
                    <td>{patients2.date_of_birth}</td>
                </tr>
            ))}        
        </>
    );
}

export default Patient2;
