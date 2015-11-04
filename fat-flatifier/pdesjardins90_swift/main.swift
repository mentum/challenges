import Foundation

var terminal = Terminal()
var arguments = terminal.ReadArguments()

var fatFlatifier = FatFlatifier(words: arguments.words, pairs: arguments.pairs)
var result = fatFlatifier.fatFlat()

print(result)

