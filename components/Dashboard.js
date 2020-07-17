import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';


export default function Dashboard() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
useEffect(() => {
    fetch('https://www.naukri.com/on-daily-wages-jobs_data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    

    <DataTable>
    <DataTable.Header>
      <DataTable.Title >States</DataTable.Title>
      <DataTable.Title numeric>Jobs</DataTable.Title>
      <DataTable.Title numeric>pay</DataTable.Title>
   
    </DataTable.Header>
    <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            
            <DataTable.Row>
              <DataTable.Cell>{item.state}</DataTable.Cell>
              <DataTable.Cell numeric>{item.jobs}</DataTable.Cell>
              <DataTable.Cell numeric>{item.pay}</DataTable.Cell>
              
            </DataTable.Row>
            //<Text>{item.id}, {item.state}, {item.jobs}, {item.pay} </Text>
            
          )}
        />
    <DataTable.Pagination
      page={5}
      numberOfPages={5}
      onPageChange={page => {
        console.log(page);
      }}
      label="1 of 1"
    />
  </DataTable>
    
  );
}
