import { StyleSheet, Text, View,ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryFilter from "../components/CategoryFilter";

const Events = () => {
  const [event, setEvent] = useState([]);
  const [active, setActive] = useState();
  const [category, setCategory] = useState();
  const [filterEvent, setFilterEvent] = useState([]);
  const [load,setLoad]=useState(true)


  
  useEffect(() => {
   
    setActive(-1);
    axios
      .get("http://192.168.1.23:3000/api/getEvents")
      .then((res) => {
        setEvent(res.data);
        setLoad(false)    
      })
      .catch((err) => {
        console.log();
      });   
      let cat = [];
      event.map((e) => (
         cat.push(e.category)
      ))
      setCategory(cat);    
      setFilterEvent(event)       
    return () => {
      setFilterEvent([])
      setCategory();
      setActive([]);
      setEvent([]);
    };
  }, []);

  const handleCategory = (c) => {
    setFilterEvent(
      event.filter((x) => x.category === c),
      setActive(true)
    );
  };     

  return (
      <>
    {event && category ?(
<ScrollView
style={{flex:1,alignContent:"center",marginTop:60}}>
    <View>
        <CategoryFilter
        categories = {category}
        categoryFilter = {handleCategory}
       


          
        active = {active}
        setActive= {setActive}

        />
        {    

            filterEvent?(
                <View>
                {filterEvent.map(item=>(
                    <Text>
                        {item.description}
                    </Text>
                ))}     
                    </View>
            ):null
        }

    </View>
</ScrollView>
    ): null
        
    }
    </>
  );

};

export default Events;

const styles = StyleSheet.create({});
