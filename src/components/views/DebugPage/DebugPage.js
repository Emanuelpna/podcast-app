import { useState } from 'react';
import { List } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DatabaseCollectionNames } from '../../../domain/enums/DatabaseCollectionNames';

import { useOnScreenFocus } from '../../../data/hooks/navigation/useOnScreenFocus';

import { Layout } from '../../commons/Layout/Layout';

import { colors } from '../../../styles/colors';
import { ScrollView } from 'react-native';
import { EpisodeDownloadService } from '../../../data/services/EpisodeDownloadService';

export function DebugPage({ navigation }) {
  const [data, setData] = useState({})

  useOnScreenFocus(navigation, async () => {
    const collections = Object.keys(DatabaseCollectionNames)

    // await AsyncStorage.clear()

    for (const collection of collections) {
      const collectionName = DatabaseCollectionNames[collection]

      AsyncStorage.getItem(collectionName).then((result) => {
        if (!result) return

        setData(old => ({ ...old, [collectionName]: JSON.parse(result) }))
      })
    }

    const downloadService = new EpisodeDownloadService()

    downloadService.getDownloadedEpisodesList()
      .then(episodes => {
        for (const episodeFilePath of episodes) {
          setData(old => ({
            ...old,
            DownloadedEpisodes: [...old.DownloadedEpisodes ?? [], { id: episodeFilePath, title: episodeFilePath }]
          }))
        }
      })
  })

  return (
    <Layout>
      <ScrollView>
        <List.AccordionGroup>
          {Object.entries(data).map(([collection, items]) => (
            <List.Accordion
              id={collection}
              key={collection}
              title={collection}
              style={{ backgroundColor: colors.background[800] }}
              titleStyle={{ color: colors.text[300] }}
            >
              {items.map(item => (
                <List.Item
                  key={item.id}
                  title={item.title}
                  description={item.id}
                  titleStyle={{ color: colors.text[300] }}
                  descriptionStyle={{ color: colors.text[300] }}
                />
              ))}
            </List.Accordion>
          ))}
        </List.AccordionGroup>
      </ScrollView>
    </Layout>
  );
}
