{
  'targets': [
    {
      'target_name': 'v8_flags',
      'sources': [
         'src/v8_flags.cc'
      ],
      'include_dirs': [
        '<!(node -e "require(\'nan\')")'
      ]
    }
  ]
}
