import palette from "./palettes";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: `2px solid ${palette.purple.main}`,
  boxShadow: 24,
  py: 12,
  px: 8,
};

export default style;