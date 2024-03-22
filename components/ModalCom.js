import { useState } from 'react';
import { View, Pressable, Image, Text, Button, Modal } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');
export default function ModalCom() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title="Press"
        onPress={() => {
          setIsModalVisible(true);
        }}
        color="midnightblue"
        // disabled
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet">
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal Content</Text>
          <Image
            source={{
              uri: 'https://ik.imagekit.io/uoi0avgvg/Web_Image/Poster/_1710784787567_marvel_Q3zzPH_12.webp?updatedAt=1710784789747',
            }}
            style={{ height: 300, width: 300 }}
          />
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
}
