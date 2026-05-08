import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const COLORS = {
  bg: '#FDF6EC',
  card: '#FFFAF4',
  border: '#D4A96A',
  accent: '#8B1A1A',
  accentLight: '#C0392B',
  text: '#3B2A1A',
  textMuted: '#7A5C3C',
  inputBorder: '#C8A97E',
  checkBg: '#FFF8EE',
  checkBorder: '#A0522D',
  submitBg: '#8B1A1A',
  submitText: '#FFF8EE',
  clearBg: '#EDE0D0',
  clearText: '#3B2A1A',
  divider: '#E8C99A',
};

function Checkbox({ checked, onPress, disabled }: { checked: boolean; onPress: () => void; disabled: boolean }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
      <View style={{
        width: 32, height: 32,
        borderWidth: 2,
        borderColor: checked ? COLORS.accent : COLORS.checkBorder,
        borderRadius: 6,
        backgroundColor: checked ? COLORS.accent : COLORS.checkBg,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {checked && <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', lineHeight: 22 }}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
}

function CheckRow({ label, checked, onPress, disabled }: { label: string; checked: boolean; onPress: () => void; disabled: boolean }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: checked ? '#FFF0DC' : COLORS.card,
        borderRadius: 10,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: checked ? COLORS.border : '#EDD9B8',
      }}
    >
      <Text style={{ fontSize: 16, color: COLORS.text, flex: 1, marginRight: 12 }}>{label}</Text>
      <Checkbox checked={checked} onPress={onPress} disabled={disabled} />
    </TouchableOpacity>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <Text style={{ fontSize: 12, fontWeight: '700', color: COLORS.textMuted, letterSpacing: 1, marginBottom: 8, marginTop: 4, textTransform: 'uppercase' }}>
      {children}
    </Text>
  );
}

function Divider() {
  return <View style={{ height: 1, backgroundColor: COLORS.divider, marginVertical: 16 }} />;
}

export default function Index() {
  const [name, setName] = useState('');
  const [isAdditionalFamChecked, setAdditionalFamIsChecked] = useState(false);
  const [isAddressChangeChecked, setAddressChangeIsChecked] = useState(false);
  const [isEmailOrPhoneChangeChecked, setIsEmailOrPhoneChangeChecked] = useState(false);
  const [isTalkAboutSupChecked, setIsTalkAboutSupChecked] = useState(false);
  const [isPrayerChecked, setIsPrayerChecked] = useState(false);
  const [isPastoralCareChecked, setIsPastoralCareChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (isSubmitted) {
      setName('');
      setAdditionalFamIsChecked(false);
      setAddressChangeIsChecked(false);
      setIsEmailOrPhoneChangeChecked(false);
      setIsTalkAboutSupChecked(false);
      setIsPrayerChecked(false);
      setIsPastoralCareChecked(false);
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.bg }} contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>

      {/* Header */}
      <View style={{ alignItems: 'center', marginBottom: 28, marginTop: 12 }}>
        <Text style={{ fontSize: 28, fontWeight: '700', color: COLORS.accent, letterSpacing: 0.5 }}>Welcome</Text>
        <Text style={{ fontSize: 15, color: COLORS.textMuted, marginTop: 4 }}>We're glad you're here</Text>
      </View>

      {/* Name */}
      <SectionLabel>Your Name</SectionLabel>
      <TextInput
        style={{
          borderWidth: 1.5,
          borderColor: COLORS.inputBorder,
          backgroundColor: COLORS.card,
          padding: 14,
          borderRadius: 10,
          fontSize: 17,
          color: COLORS.text,
          marginBottom: 4,
        }}
        placeholder="Enter your name..."
        placeholderTextColor="#B89A72"
        value={name}
        onChangeText={setName}
        editable={!isSubmitted}
      />

      <Divider />

      {/* Updates section */}
      <SectionLabel>Updates &amp; Changes</SectionLabel>
      <CheckRow
        label="Additional family members"
        checked={isAdditionalFamChecked}
        onPress={() => setAdditionalFamIsChecked(!isAdditionalFamChecked)}
        disabled={isSubmitted}
      />
      <CheckRow
        label="Address change"
        checked={isAddressChangeChecked}
        onPress={() => setAddressChangeIsChecked(!isAddressChangeChecked)}
        disabled={isSubmitted}
      />
      <CheckRow
        label="Email or phone number change"
        checked={isEmailOrPhoneChangeChecked}
        onPress={() => setIsEmailOrPhoneChangeChecked(!isEmailOrPhoneChangeChecked)}
        disabled={isSubmitted}
      />

      <Divider />

      {/* Community supports */}
      <SectionLabel>Community Support</SectionLabel>
      <CheckRow
        label="I'd like to talk with someone about community supports"
        checked={isTalkAboutSupChecked}
        onPress={() => setIsTalkAboutSupChecked(!isTalkAboutSupChecked)}
        disabled={isSubmitted}
      />
      <View style={{ paddingLeft: 16, marginBottom: 4 }}>
        {['Help with mental health', 'Help with addictions', 'Help with income assistance'].map((item) => (
          <Text key={item} style={{ fontSize: 14, color: COLORS.textMuted, marginBottom: 4 }}>• {item}</Text>
        ))}
      </View>

      <Divider />

      {/* Pastoral care */}
      <SectionLabel>Prayer &amp; Pastoral Care</SectionLabel>
      <CheckRow
        label="I'd like someone to pray with / for me"
        checked={isPrayerChecked}
        onPress={() => setIsPrayerChecked(!isPrayerChecked)}
        disabled={isSubmitted}
      />
      <CheckRow
        label="I'd like to talk to someone for pastoral or emotional support"
        checked={isPastoralCareChecked}
        onPress={() => setIsPastoralCareChecked(!isPastoralCareChecked)}
        disabled={isSubmitted}
      />

      <Divider />

      {/* Submit */}
      <View style={{ alignItems: 'center', marginTop: 8 }}>
        <TouchableOpacity
          onPress={handleSubmit}
          activeOpacity={0.8}
          style={{
            backgroundColor: isSubmitted ? COLORS.clearBg : COLORS.submitBg,
            paddingVertical: 16,
            paddingHorizontal: 60,
            borderRadius: 12,
            shadowColor: '#8B1A1A',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: isSubmitted ? 0 : 0.25,
            shadowRadius: 4,
            elevation: isSubmitted ? 0 : 3,
          }}
        >
          <Text style={{ color: isSubmitted ? COLORS.clearText : COLORS.submitText, fontSize: 18, fontWeight: '700', letterSpacing: 0.5 }}>
            {isSubmitted ? 'Clear Form' : 'Submit'}
          </Text>
        </TouchableOpacity>

        {isSubmitted && (
          <Text style={{ marginTop: 20, fontSize: 16, color: COLORS.textMuted, textAlign: 'center', lineHeight: 24 }}>
            Thank you! Please return the tablet to the front desk.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
