const DeleteIcon = (props) => {
  return (
    <div>
      <svg onClick={() => props.removeCharacter(props.id)} style={{ cursor: 'pointer' }} viewBox="0 0 384 384" width='25' height='25'>
        <g>
          <g>
            <g>
              <path className='hoverChangeColor' d="M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z" />
              <polygon className='hoverChangeColor' points="266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333 			" />
            </g>
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </svg>
    </div>
  )
}

export default DeleteIcon
