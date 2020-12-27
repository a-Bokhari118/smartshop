import Dropzone from 'react-dropzone';

const FileUpload = ({ onDrop }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropzone onDrop={onDrop} multiple={true} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: '300px',
              height: '240px',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <i className='fas fa-plus '></i>
          </div>
        )}
      </Dropzone>
      <div
        style={{
          width: '350px',
          height: '240px',
          display: 'flex',
          overflowX: 'scroll',
        }}
      >
        <div onClick>
          <img />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
