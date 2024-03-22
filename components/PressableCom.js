import { View, Pressable, Image, Text, Button } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');
export default function PressableCom() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Pressable onPress={() => console.log('Image Pressed')}>
        <Image
          source={{
            uri: 'https://ik.imagekit.io/uoi0avgvg/Web_Image/Poster/_1710784787567_marvel_Q3zzPH_12.webp?updatedAt=1710784789747',
          }}
          style={{ height: 300, width: 300 }}
        />
      </Pressable>

      <Pressable
        onPress={() => console.log('Text Pressed')}
        onPressIn={() => console.log('onPress in')}
        onPressOut={() => console.log('onPress out')}
        onLongPress={() => console.log('long Press')}>
        <Text>
          lorem this is grat sldklfjsdfj klsdjflksdj flksdklfjlksd
          jflksdjfkljsklf jlsdj fklsdjlfkjsdlfkjsdkjfls
          alfhdsafhqhwerhldsfjdoijfoewopf of osfpjwsfljdlfjaddfoppf isdjfldsj
          fsjdfklaj sdf lkfdjlasjf osajojfowejof jwofemopmefoop qfojqopfjajkldf
          jlsdjfljsdlfjlj sdlfjdsflkjsld flkjsdlfjlksdjfalj laj fkajf a fal
          fjadslfj lkasjfls;lkdf;sdkf ksdl;f ;sd f; kskd;fk l;sdk fl;skd;
          fs;djfk;jas;fj;sjdfklsjadlkfhliah pifhpn vo ndvsoa nvoas nl nsaldfnlsa
          nfllasn flsa klfjsad fj lajfjasljfjasdkljfk sdjfj sdlf lksdjf
          flkjsdlfjlksdjfalj laj fkajf a fal fjadslfj lkasjfls;lkdf;sdkf ksdl;f
          ;sd f; kskd;fk l;sdk fl;skd; fs;djfk;jas;fj;sjdfklsjadlkfhliah pifhpn
          vo ndvsoa nvoas nl nsaldfnlsa nfllasn flsa klfjsad fj
          lajfjasljfjasdkljfk sdjfj sdlf lksdjf jdsjfjsdjfoijoewi
        </Text>
      </Pressable>

      <Image
        source={{
          uri: 'https://ik.imagekit.io/uoi0avgvg/Web_Image/Poster/_1710784787567_marvel_Q3zzPH_12.webp?updatedAt=1710784789747',
        }}
        style={{ height: 300, width: 300 }}
      />
    </View>
  );
}
