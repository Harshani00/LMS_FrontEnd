import React from "react";
import moment from "moment";
import Timetable from "react-native-calendar-timetable";
import { ScrollView } from "react-native";

export default function App() {
    /**
     * By default Timetable renders one column.
     * This sets date for that column, by default equals to new Date().
     * Can be instance of Date or an ISO string.
     * Essentially, a shortcut for range {from: date, till: date}.
     */
    const [date] = React.useState(new Date());

    /**
     * If you would like to have multiple columns (e.g. from Monday to Sunday),
     * you can specify range of dates. Each day of said range will have its own column.
     *
     * 'from' and 'till', just like 'date', can be instances of Date or an ISO strings.
     *
     * It is safe to keep 'from' and 'till' in separate states if you need to
     * because Timetable only check if 'from' or 'till' had changed and
     * not the object that contains them.
     */
    const [from] = React.useState(moment().subtract(3, 'days').toDate());
    const [till] = React.useState(moment().add(3, 'days').toISOString());
    const range = {from, till};

    const [items] = React.useState([
      {
          title: 'Some event',
          startDate: moment().subtract(1, 'hour').toDate(),
          endDate: moment().add(1, 'hour').toDate(),
      },
      {
          title: 'Another event',
          startDate: moment().add(2, 'days').toDate(),
          endDate: moment().add(2, 'days').add(2, 'hours').toDate(),
      },
      {
          title: 'Third event',
          startDate: moment().subtract(3, 'days').add(1, 'hour').toDate(),
          endDate: moment().subtract(3, 'days').add(3, 'hours').toDate(),
      },
  ]);
  

    return (
      
        <ScrollView>
            <Timetable
                // these two are required
                items={items}
                cardComponent={MyItemCard}

                // provide only one of these if you need to
                date={date} // optional
                range={range} // optional
            />
        </ScrollView>
    );
}

function MyItemCard({ item }) {
    return (
        <View>
            <Text>{item.title}</Text>
            <Text>{moment(item.startDate).format('LT')} - {moment(item.endDate).format('LT')}</Text>
        </View>
    );
}