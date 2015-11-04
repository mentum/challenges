import Foundation

public class Terminal {

    public func ReadArguments() -> (words: Int, pairs: Int) {

        if (Process.arguments.count < 3) {
            print("Too few arguments, please provide number of words and number of pairs")
            exit(0)
        }

        let words = Int(Process.arguments[1])!
        let pairs = Int(Process.arguments[2])!

        return (words, pairs)
    }

}
