import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';

import { fetchImages, saveImageId, deleteImageById, updateFavorites } from './redux/slices/imagePickerSlice';
import { stateSelector, imagesSelector, selectFavorited, selectImageDetail} from './redux/selectors';
import './App.css';
import Header from './components/header';
import Loader from './components/loader';
import Error from './components/errorComponent';
import ImageList from './components/imageList';
import ImageDetails from './components/imageDetails';

function App() {
  const dispatch = useAppDispatch()
  const [tabName, settabName] = useState('recentlyAdded');

  useEffect(() => {
    dispatch(fetchImages())
  }, [dispatch])

  const handleTabClick = (tabName: string):void => {
    settabName(tabName);
  };

  const handleImageClick = (imageId: string):void => {
    dispatch(saveImageId(imageId));
  };

  const handleDeleteImage = (imageId: string):void => {
    dispatch(deleteImageById(imageId));
  };

  const handleUpdateFavorites = (imageId: string):void => {
    dispatch(updateFavorites(imageId));
  };

  const { error, loading } = useAppSelector(stateSelector);
  const images = useAppSelector(imagesSelector);
  const favoritedImages = useAppSelector(selectFavorited);
  const imageDetail = useAppSelector(selectImageDetail);
  const displayImages = tabName === 'recentlyAdded' ? images : favoritedImages;

  // select first image when switch on a new tab
  useEffect(() => {
    if(displayImages.length > 0) {
      dispatch(saveImageId(displayImages[0].id));
    }
  }, [tabName])

  useEffect(() => {
    if(tabName === 'favorited' && displayImages.length > 0) {
      dispatch(saveImageId(displayImages[0].id));
    }
  }, [displayImages])

  return (
    <main className='container'>
      {error && <Error errorMessage={error}/>}
      {loading && <Loader/>}
      {!error && !loading && (
        <div className='wrapper'>
          <div className='list'>
            <Header onTabClick={handleTabClick} tabName={tabName}/>
            <ImageList images={displayImages} onImageClick={handleImageClick} imageDetail={imageDetail}/>
          </div>
          <aside className='detailInfo'>
            <ImageDetails image={imageDetail} onDeleteClick={handleDeleteImage} onFavoritedHandle={handleUpdateFavorites}/>
          </aside>
        </div>
      )}  
    </main>
  );
}

export default App;
