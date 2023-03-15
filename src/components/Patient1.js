function Patient1({patients1Data}) {
    return (
        <>
            {patients1Data.data?.map(patients1 => (
                <tr>
                    <td>{patients1.first_name}</td>
                    <td>{patients1.last_name}</td>
                    <td>{patients1.date_of_birth}</td>
                </tr>
            ))}        
        </>
    );
}

export default Patient1;
