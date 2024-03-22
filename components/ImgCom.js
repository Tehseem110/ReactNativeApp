import { Text, View } from 'react-native';
export default function ImgCom() {
  return (
    <View>
      {/* <Image source={logoImg} style={{ height: 300, width: 300 }} /> */}
      {/* <Image
        source={{
          uri: 'https://ik.imagekit.io/uoi0avgvg/Web_Image/Poster/_1710784787567_marvel_Q3zzPH_12.webp?updatedAt=1710784789747',
        }}
        style={{ height: 300, width: 300 }}
      /> */}
      <ImageBackground
        source={logoImg}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
      ;
    </View>
  );
}
