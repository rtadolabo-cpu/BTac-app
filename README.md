# BTac-app
marketplace app with React Native
# リポジトリをクローン
git clone https://github.com/BTac/BTac-app.git
cd BTac-app

# React Native プロジェクトを初期化
npx create-expo-app .

# 依存関係をインストール
npm install
# BTac App - Marketplace Application

メルカリのようなマーケットプレイスアプリ。React Native + Expo で開発されています。

## 機能

- **ホーム画面**: おすすめ商品を表示
- **検索**: 商品検索機能
- **出品**: 新しい商品を出品
- **メッセージ**: 売り手・買い手間の直接メッセージング
- **プロフィール**: ユーザープロフィール管理

## 技術スタック

- **Frontend**: React Native (Expo)
- **Navigation**: React Navigation
- **Backend**: Firebase (予定)
- **State Management**: useState (将来的に Redux/Context API へ移行可能)

## インストール

```bash
# リポジトリをクローン
git clone https://github.com/BTac/BTac-app.git
cd BTac-app

# 依存関係をインストール
npm install

# アプリを起動
npm start# iOS シミュレータで実行
npm run ios

# Android エミュレータで実行
npm run android

# Web ブラウザで実行
npm run webBTac-app/
├── src/
│   └── screens/
│       ├── HomeScreen.js
│       ├── SearchScreen.js
│       ├── PostScreen.js
│       ├── MessagesScreen.js
│       └── ProfileScreen.js
├── App.js
├── package.json
└── README.md{
  "name": "btac-app",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  },
  "dependencies": {
    "expo": "~49.0.0",
    "react": "18.2.0",
    "react-native": "0.72.6",
    "react-navigation": "^6.1.0",
    "react-navigation-bottom-tabs": "^6.5.0",
    "react-navigation-native": "^6.1.0",
    "@react-navigation/stack": "^6.3.0",
    "firebase": "^10.0.0",
    "expo-image-picker": "~14.2.1",
    "expo-camera": "~13.4.4"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
  "private": true
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Screen imports
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import PostScreen from './src/screens/PostScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Post') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF6B6B',
          tabBarInactiveTintColor: '#999',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'ホーム' }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: '検索' }}
        />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={{ title: '出品' }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesScreen}
          options={{ title: 'メッセージ' }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'プロフィール' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const [products, setProducts] = React.useState([
    {
      id: '1',
      name: '商品1',
      price: '1000円',
      image: 'https://via.placeholder.com/100',
      seller: 'セラー1',
    },
    {
      id: '2',
      name: '商品2',
      price: '2000円',
      image: 'https://via.placeholder.com/100',
      seller: 'セラー2',
    },
    {
      id: '3',
      name: '商品3',
      price: '3000円',
      image: 'https://via.placeholder.com/100',
      seller: 'セラー3',
    },
  ]);

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productSeller}>{item.seller}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>おすすめ商品</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 4,
  },
  productSeller: {
    fontSize: 12,
    color: '#999',
  },
});

export default HomeScreen;
import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
  const [searchText, setSearchText] = React.useState('');
  const [results, setResults] = React.useState([]);

  const handleSearch = (text) => {
    setSearchText(text);
    // ここで検索ロジックを実装
    if (text) {
      setResults([
        { id: '1', name: '検索結果1', price: '1500円' },
        { id: '2', name: '検索結果2', price: '2500円' },
      ]);
    } else {
      setResults([]);
    }
  };

  const renderResult = ({ item }) => (
    <TouchableOpacity style={styles.resultCard}>
      <Image
        source={{ uri: 'https://via.placeholder.com/80' }}
        style={styles.resultImage}
      />
      <View style={styles.resultInfo}>
        <Text style={styles.resultName}>{item.name}</Text>
        <Text style={styles.resultPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="商品を検索..."
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>

      {results.length > 0 ? (
        <FlatList
          data={results}
          renderItem={renderResult}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>検索結果がありません</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  resultCard: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  resultImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  resultInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  resultName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  resultPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});

export default SearchScreen;
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PostScreen = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    if (!title || !description || !price) {
      Alert.alert('エラー', 'すべてのフィールドを入力してください');
      return;
    }
    Alert.alert('成功', '商品を出品しました！');
    setTitle('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>商品を出品</Text>

      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>
          {image ? '画像を変更' : '画像を選択'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>商品名</Text>
      <TextInput
        style={styles.input}
        placeholder="商品名を入力"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>説明</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="商品の説明を入力"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>価格</Text>
      <TextInput
        style={styles.input}
        placeholder="価格を入力（円）"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handlePost}>
        <Text style={styles.submitButtonText}>出品する</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 15,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PostScreen;
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MessagesScreen = () => {
  const [messages, setMessages] = React.useState([
    {
      id: '1',
      sender: 'ユーザー1',
      lastMessage: '商品について質問があります',
      timestamp: '10分前',
      avatar: 'https://via.placeholder.com/50',
      unread: true,
    },
    {
      id: '2',
      sender: 'ユーザー2',
      lastMessage: '購入したいのですが...',
      timestamp: '1時間前',
      avatar: 'https://via.placeholder.com/50',
      unread: false,
    },
  ]);

  const renderMessage = ({ item }) => (
    <TouchableOpacity style={styles.messageCard}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageInfo}>
        <View style={styles.messageHeader}>
          <Text style={styles.senderName}>{item.sender}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text
          style={[styles.lastMessage, item.unread && styles.unreadMessage]}
          numberOfLines={1}
        >
          {item.lastMessage}
        </Text>
      </View>
      {item.unread && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {messages.length > 0 ? (
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="chatbubble-outline" size={60} color="#ccc" />
          <Text style={styles.emptyText}>メッセージはまだありません</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  messageInfo: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  senderName: {
    fontSize: 14,
    fontWeight: '600',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  lastMessage: {
    fontSize: 13,
    color: '#666',
  },
  unreadMessage: {
    color: '#000',
    fontWeight: '500',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    marginTop: 10,
  },
});

export default MessagesScreen;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [user] = React.useState({
    name: 'ユーザー名',
    email: 'user@example.com',
    avatar: 'https://via.placeholder.com/100',
    rating: 4.5,
    reviews: 120,
    itemsListed: 45,
  });

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{user.rating}</Text>
          <Text style={styles.reviews}>({user.reviews}件の評価)</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{user.itemsListed}</Text>
          <Text style={styles.statLabel}>出品中</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>8</Text>
          <Text style={styles.statLabel}>売却済み</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>購入済み</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="list" size={20} color="#666" />
          <Text style={styles.menuText}>出品一覧</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="heart" size={20} color="#666" />
          <Text style={styles.menuText}>いいね</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings" size={20} color="#666" />
          <Text style={styles.menuText}>設定</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle" size={20} color="#666" />
          <Text style={styles.menuText}>ヘルプ</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>ログアウト</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
  reviews: {
    fontSize: 12,
    color: '#999',
    marginLeft: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
  },
  menuContainer: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    fontSize: 14,
    marginLeft: 15,
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    margin: 15,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
